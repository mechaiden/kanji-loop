"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import ProgressBar from "@/components/ProgressBar";
import { romajiOf } from "@/lib/japanese";
import {
  ROUND_SIZE,
  applyGrade,
  gradeAnswer,
  masterySummary,
  nextQuestion,
  type NextQuestion,
} from "@/lib/learn/engine";
import { getProgress, getSet, saveProgress } from "@/lib/storage";
import { useLocalData } from "@/lib/useLocalData";
import type { Grade, QuestionKind, RoundEntry, SetProgress, StudySet } from "@/lib/types";

const INSTRUCTION: Record<QuestionKind, string> = {
  "mc-jp-en": "What does this mean?",
  "mc-en-jp": "Which word is this?",
  "mc-reading": "How is this read?",
  "type-reading": "Type the reading",
  "type-en": "Type the meaning",
  "type-jp": "Write this in Japanese",
};

/** Kinds whose prompt is Japanese, and so needs the CJK font and a bigger size. */
const JAPANESE_PROMPT: Record<QuestionKind, boolean> = {
  "mc-jp-en": true,
  "mc-en-jp": false,
  "mc-reading": true,
  "type-reading": true,
  "type-en": true,
  "type-jp": false,
};

const JAPANESE_CHOICES: Record<QuestionKind, boolean> = {
  "mc-jp-en": false,
  "mc-en-jp": true,
  "mc-reading": true,
  "type-reading": false,
  "type-en": false,
  "type-jp": false,
};

type Feedback = { grade: Grade; answer: string };

/** The set, the learner's progress, and the question on screen — always in step. */
type Session = {
  set: StudySet;
  progress: SetProgress;
  current: NextQuestion | null;
};

export default function LearnPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: session,
    ready,
    setData: setSession,
  } = useLocalData<Session | null>(() => {
    const found = getSet(id);
    if (!found) return null;
    const progress = getProgress(found);
    return { set: found, progress, current: nextQuestion(found.items, progress) };
  }, [id]);

  const [given, setGiven] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  /** A near-miss is forgiven once per question; a second one counts as wrong. */
  const [almostUsed, setAlmostUsed] = useState(false);
  const [round, setRound] = useState<RoundEntry[]>([]);
  const [recap, setRecap] = useState<RoundEntry[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Don't let a queued auto-advance fire after the user navigates away.
  useEffect(() => () => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
  }, []);

  const goToNext = useCallback(
    (fromProgress: SetProgress, lastItemId: string) => {
      setFeedback(null);
      setGiven("");
      setAlmostUsed(false);
      setSession((state) =>
        state
          ? {
              ...state,
              progress: fromProgress,
              current: nextQuestion(state.set.items, fromProgress, lastItemId),
            }
          : state,
      );
      inputRef.current?.focus();
    },
    [setSession],
  );

  const submit = useCallback(
    (answer: string) => {
      if (!session?.current || feedback?.grade === "correct") return;

      const { set, progress, current } = session;
      const item = set.items.find(
        (candidate) => candidate.id === current.question.itemId,
      );
      if (!item) return;

      const raw = gradeAnswer(current.question, item, answer);

      // "Almost" is a spelling slip, not a knowledge gap: let them retype once
      // without touching their level or burning a question slot.
      if (raw === "almost" && !almostUsed) {
        setAlmostUsed(true);
        setFeedback({ grade: "almost", answer: current.question.answerLabel });
        return;
      }
      const grade: Grade = raw === "almost" ? "incorrect" : raw;

      const clock = progress.clock + 1;
      const updated: SetProgress = {
        ...progress,
        clock,
        questionsAnswered: progress.questionsAnswered + 1,
        states: {
          ...progress.states,
          [item.id]: applyGrade(progress.states[item.id], item, grade, clock),
        },
        updatedAt: Date.now(),
      };

      setSession((state) => (state ? { ...state, progress: updated } : state));
      saveProgress(updated);
      setFeedback({ grade, answer: current.question.answerLabel });

      const entry: RoundEntry = { question: current.question, given: answer, grade };
      const nextRound = [...round, entry];
      setRound(nextRound);

      // Right answers flow straight on; wrong ones wait for the learner to read
      // the correction and press continue.
      if (grade === "correct") {
        advanceTimer.current = setTimeout(() => {
          if (nextRound.length >= ROUND_SIZE) {
            setRecap(nextRound);
          } else {
            goToNext(updated, item.id);
          }
        }, 650);
      }
    },
    [session, feedback, almostUsed, round, goToNext, setSession],
  );

  const handleContinue = useCallback(() => {
    if (!session?.current) return;
    if (round.length >= ROUND_SIZE) {
      setRecap(round);
      return;
    }
    goToNext(session.progress, session.current.question.itemId);
  }, [session, round, goToNext]);

  // Number keys pick a choice, Enter moves on — the whole session is keyboard-only.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (recap) return;
      const choices = session?.current?.question.choices;

      if (feedback && feedback.grade !== "almost") {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          if (feedback.grade !== "correct") handleContinue();
        }
        return;
      }

      if (choices && /^[1-9]$/.test(event.key)) {
        const index = Number(event.key) - 1;
        if (index < choices.length) {
          event.preventDefault();
          submit(choices[index]);
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [session, feedback, recap, submit, handleContinue]);

  if (!ready) return <div className="h-60 animate-pulse rounded-xl bg-surface" />;

  if (!session) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted">That set no longer exists.</p>
        <Link href="/" className="focus-ring mt-4 inline-block rounded text-accent">
          Back to your sets
        </Link>
      </div>
    );
  }

  const { set, progress, current } = session;
  const summary = masterySummary(set.items, progress);

  if (recap) {
    const missed = recap.filter((entry) => entry.grade !== "correct");
    return (
      <div className="mx-auto max-w-xl animate-rise py-10 text-center">
        <div className="jp text-4xl">{missed.length === 0 ? "完璧" : "いいね"}</div>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          {recap.length - missed.length} of {recap.length} right
        </h2>
        <p className="mt-2 text-sm text-muted">
          {summary.mastered} of {summary.total} words mastered
        </p>
        <ProgressBar value={summary.percent} className="mt-5" />

        {missed.length > 0 && (
          <ul className="mt-8 space-y-2 text-left">
            {missed.map((entry, index) => {
              const item = set.items.find((c) => c.id === entry.question.itemId);
              return (
                <li
                  key={`${entry.question.itemId}-${index}`}
                  className="rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <div className="jp text-lg">{item?.term}</div>
                  <div className="text-sm text-muted">
                    {item?.reading !== item?.term && `${item?.reading} · `}
                    {item?.meaning}
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href={`/sets/${set.id}`}
            className="focus-ring rounded-xl border border-border px-5 py-3 text-sm text-muted hover:text-foreground"
          >
            Take a break
          </Link>
          <button
            type="button"
            autoFocus
            onClick={() => {
              setRound([]);
              setRecap(null);
              goToNext(progress, current?.question.itemId ?? "");
            }}
            className="focus-ring rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Keep going
          </button>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted">This set has no words yet.</p>
      </div>
    );
  }

  const { question } = current;
  const japanesePrompt = JAPANESE_PROMPT[question.kind];
  const japaneseChoices = JAPANESE_CHOICES[question.kind];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center gap-4">
        <Link
          href={`/sets/${set.id}`}
          className="focus-ring rounded text-sm text-muted hover:text-foreground"
          aria-label="Leave the session"
        >
          ✕
        </Link>
        <ProgressBar value={summary.percent} className="flex-1" label="Set mastery" />
        <span className="w-20 text-right text-xs text-muted tabular-nums">
          {round.length}/{ROUND_SIZE}
        </span>
      </div>

      {current.review && (
        <p className="mb-5 rounded-lg border border-accent/25 bg-accent/5 px-4 py-2.5 text-center text-sm text-muted">
          Everything&rsquo;s mastered — this is review, mixing the hardest question
          types to keep it fresh.
        </p>
      )}

      <div key={`${question.itemId}-${question.kind}`} className="animate-rise">
        <p className="text-sm text-muted">{INSTRUCTION[question.kind]}</p>

        <div
          className={`mt-3 font-medium ${
            japanesePrompt ? "jp text-5xl" : "text-3xl"
          }`}
        >
          {question.prompt}
        </div>
        {question.hint && (
          <p className="mt-2 text-sm text-muted">{question.hint}</p>
        )}

        {question.choices ? (
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {question.choices.map((choice, index) => {
              const chosen = feedback && given === choice;
              const isAnswer = choice === question.correctChoice;
              const reveal = Boolean(feedback);

              return (
                <li key={choice}>
                  <button
                    type="button"
                    disabled={reveal}
                    onClick={() => {
                      setGiven(choice);
                      submit(choice);
                    }}
                    className={`focus-ring flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                      reveal && isAnswer
                        ? "border-correct bg-correct/10"
                        : reveal && chosen
                          ? "border-wrong bg-wrong/10"
                          : "border-border bg-surface hover:border-accent/50"
                    } ${reveal && !isAnswer && !chosen ? "opacity-40" : ""}`}
                  >
                    <span className="shrink-0 text-xs text-muted tabular-nums">
                      {index + 1}
                    </span>
                    <span className={japaneseChoices ? "jp text-xl" : ""}>
                      {choice}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <form
            className="mt-8"
            onSubmit={(event) => {
              event.preventDefault();
              if (feedback && feedback.grade !== "almost") {
                if (feedback.grade !== "correct") handleContinue();
                return;
              }
              submit(given);
            }}
          >
            <input
              ref={inputRef}
              autoFocus
              value={given}
              onChange={(event) => setGiven(event.target.value)}
              readOnly={Boolean(feedback) && feedback?.grade !== "almost"}
              placeholder={
                question.kind === "type-en"
                  ? "in English"
                  : "kana or romaji — either is accepted"
              }
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className={`focus-ring w-full rounded-xl border bg-surface px-4 py-3.5 text-xl ${
                question.kind === "type-en" ? "" : "jp"
              } ${
                feedback?.grade === "correct"
                  ? "border-correct"
                  : feedback?.grade === "incorrect"
                    ? "animate-shake border-wrong"
                    : feedback?.grade === "almost"
                      ? "animate-shake border-almost"
                      : "border-border"
              }`}
            />
            {/* Stays up through an "almost" so the retype has a button, not
                just the Enter key. */}
            {(!feedback || feedback.grade === "almost") && (
              <button
                type="submit"
                className="focus-ring mt-3 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-35"
                disabled={!given.trim()}
              >
                Check
              </button>
            )}
          </form>
        )}

        {feedback?.grade === "almost" && (
          <p className="mt-4 text-sm text-almost">
            So close — check your spelling and try once more.
          </p>
        )}

        {feedback?.grade === "incorrect" && (
          <div className="mt-6 animate-rise">
            <div className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="text-xs text-muted">Correct answer</p>
              <p className="jp mt-1 text-2xl">{feedback.answer}</p>
              {question.answerReading && (
                <p className="mt-1 text-sm text-muted">
                  {romajiOf(question.answerReading)}
                </p>
              )}
            </div>
            <button
              type="button"
              autoFocus
              onClick={handleContinue}
              className="focus-ring mt-4 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
