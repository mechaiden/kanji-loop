"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { gradeJapanese, romajiOf } from "@/lib/japanese";
import { getProgress, getSet } from "@/lib/storage";
import { useLocalData } from "@/lib/useLocalData";
import type { Grade, StudySet, VocabItem } from "@/lib/types";

type ClozeQuestion = {
  term: VocabItem;
  sentenceWithBlank: string;
  answer: string;
  answerReading: string;
  fullSentence: string;
  english: string;
};

/** Fetch more once the queue drops this low, so there's no wait between questions. */
const REFILL_AT = 2;
const BATCH_SIZE = 6;

export default function SentencesPage() {
  const { id } = useParams<{ id: string }>();

  const { data: set, ready } = useLocalData<StudySet | null>(
    () => getSet(id),
    [id],
  );

  const [queue, setQueue] = useState<ClozeQuestion[]>([]);
  const [given, setGiven] = useState("");
  const [grade, setGrade] = useState<Grade | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [answered, setAnswered] = useState(0);

  // Guards against two refills racing when a fetch is slower than the learner.
  const fetching = useRef(false);

  const refill = useCallback(async (target: StudySet) => {
    if (fetching.current) return;
    fetching.current = true;

    try {
      const progress = getProgress(target);
      // Weight the batch toward words the learner is shakiest on.
      const ranked = [...target.items].sort(
        (a, b) =>
          (progress.states[a.id]?.level ?? 0) - (progress.states[b.id]?.level ?? 0),
      );
      const focus = ranked.slice(0, 12);

      const response = await fetch("/api/practice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: focus.map(({ term, reading, meaning }) => ({
            term,
            reading,
            meaning,
          })),
          count: BATCH_SIZE,
          known: target.items.map((item) => item.term),
        }),
      });

      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "Couldn't generate sentences.");

      const batch: ClozeQuestion[] = payload.questions
        .map((question: {
          term_index: number;
          sentence_with_blank: string;
          answer: string;
          answer_reading: string;
          full_sentence: string;
          english: string;
        }) => {
          const term = focus[question.term_index];
          if (!term) return null;
          return {
            term,
            sentenceWithBlank: question.sentence_with_blank,
            answer: question.answer,
            answerReading: question.answer_reading,
            fullSentence: question.full_sentence,
            english: question.english,
          };
        })
        .filter(Boolean) as ClozeQuestion[];

      setError(null);
      setQueue((current) => [...current, ...batch]);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Couldn't generate sentences.");
    } finally {
      fetching.current = false;
    }
  }, []);

  // Top the queue back up whenever it runs low, so there's no wait between
  // questions. `refill` only touches state after its fetch resolves, which the
  // lint rule can't see through the async boundary.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (set && queue.length <= REFILL_AT) void refill(set);
  }, [set, queue.length, refill]);

  if (!ready) return <div className="h-60 animate-pulse rounded-xl bg-surface" />;

  if (!set) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted">That set no longer exists.</p>
        <Link href="/" className="focus-ring mt-4 inline-block rounded text-accent">
          Back to your sets
        </Link>
      </div>
    );
  }

  const current = queue[0];

  function check() {
    if (!current || grade) return;
    setGrade(gradeJapanese(given, [current.answer, current.answerReading]));
  }

  function next() {
    setQueue((rest) => rest.slice(1));
    setGiven("");
    setGrade(null);
    setAnswered((count) => count + 1);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href={`/sets/${set.id}`}
          className="focus-ring rounded text-sm text-muted hover:text-foreground"
        >
          ← {set.name}
        </Link>
        <span className="text-xs text-muted tabular-nums">
          {answered} answered
        </span>
      </div>

      {!current ? (
        error ? (
          <div className="py-16 text-center">
            <p className="text-sm text-wrong">{error}</p>
            <button
              type="button"
              onClick={() => void refill(set)}
              className="focus-ring mt-4 rounded-xl border border-border px-5 py-2.5 text-sm"
            >
              Try again
            </button>
          </div>
        ) : (
          <div className="py-16 text-center">
            <div className="jp animate-pulse text-3xl text-accent">作文中</div>
            <p className="mt-4 text-sm text-muted">
              Writing fresh sentences with your words…
            </p>
          </div>
        )
      ) : (
        <div className="animate-rise">
          <p className="text-sm text-muted">Fill in the blank</p>
          <p className="jp mt-4 text-3xl leading-relaxed">
            {current.sentenceWithBlank}
          </p>
          <p className="mt-3 text-sm text-muted">{current.english}</p>

          <form
            className="mt-8"
            onSubmit={(event) => {
              event.preventDefault();
              if (grade) next();
              else check();
            }}
          >
            <input
              autoFocus
              value={given}
              onChange={(event) => setGiven(event.target.value)}
              readOnly={Boolean(grade)}
              placeholder="kana or romaji"
              autoComplete="off"
              spellCheck={false}
              className={`jp focus-ring w-full rounded-xl border bg-surface px-4 py-3.5 text-xl ${
                grade === "correct"
                  ? "border-correct"
                  : grade === "almost"
                    ? "animate-shake border-almost"
                    : grade === "incorrect"
                      ? "animate-shake border-wrong"
                      : "border-border"
              }`}
            />
            <button
              type="submit"
              disabled={!grade && !given.trim()}
              className="focus-ring mt-3 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-35"
            >
              {grade ? "Next sentence" : "Check"}
            </button>
          </form>

          {grade && (
            <div className="mt-6 animate-rise rounded-xl border border-border bg-surface px-4 py-4">
              <p className="text-xs text-muted">
                {grade === "correct"
                  ? "Correct"
                  : grade === "almost"
                    ? "Almost — watch the spelling"
                    : "The answer was"}
              </p>
              <p className="jp mt-1 text-2xl">{current.answer}</p>
              <p className="text-sm text-muted">{romajiOf(current.answerReading)}</p>
              <p className="jp mt-4 text-lg">{current.fullSentence}</p>
              <p className="mt-1 text-sm text-muted">{current.english}</p>
              <p className="mt-3 text-xs text-muted opacity-70">
                from {current.term.term} · {current.term.meaning}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
