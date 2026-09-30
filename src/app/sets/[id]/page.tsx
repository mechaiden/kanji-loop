"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import ProgressBar from "@/components/ProgressBar";
import { isMastered, ladderFor, masterySummary } from "@/lib/learn/engine";
import { getProgress, getSet, resetProgress } from "@/lib/storage";
import { romajiOf } from "@/lib/japanese";
import { useLocalData } from "@/lib/useLocalData";
import type { SetProgress, StudySet } from "@/lib/types";

export default function SetPage() {
  const { id } = useParams<{ id: string }>();

  const { data, ready, setData } = useLocalData<{
    set: StudySet;
    progress: SetProgress;
  } | null>(() => {
    const found = getSet(id);
    return found ? { set: found, progress: getProgress(found) } : null;
  }, [id]);

  if (!ready) return <div className="h-40 animate-pulse rounded-xl bg-surface" />;

  if (!data) {
    return (
      <div className="py-20 text-center">
        <p className="text-muted">That set no longer exists.</p>
        <Link href="/" className="focus-ring mt-4 inline-block rounded text-accent">
          Back to your sets
        </Link>
      </div>
    );
  }

  const { set, progress } = data;
  const summary = masterySummary(set.items, progress);

  function handleReset() {
    if (!confirm("Reset all progress for this set? The words stay, the scores go.")) {
      return;
    }
    setData({ set, progress: resetProgress(set) });
  }

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight">{set.name}</h1>
          <p className="mt-1 text-sm text-muted">
            {summary.mastered} of {summary.total} mastered ·{" "}
            {progress.questionsAnswered} questions answered
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/sets/${set.id}/sentences`}
            className="focus-ring rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent/50"
          >
            Sentence practice
          </Link>
          <Link
            href={`/sets/${set.id}/learn`}
            className="focus-ring rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {summary.percent === 0 ? "Start learning" : "Continue learning"}
          </Link>
        </div>
      </div>

      <ProgressBar value={summary.percent} className="mt-5" />

      <ul className="mt-8 divide-y divide-border rounded-xl border border-border">
        {set.items.map((item) => {
          const state = progress.states[item.id];
          const rungs = ladderFor(item).length;
          const done = state ? isMastered(item, state) : false;

          return (
            <li key={item.id} className="flex items-center gap-4 px-4 py-3">
              <div className="min-w-0 flex-1">
                <div className="jp text-lg">
                  {item.term}
                  {item.reading !== item.term && (
                    <span className="ml-2 text-sm text-muted">{item.reading}</span>
                  )}
                </div>
                <div className="text-sm text-muted">
                  {item.meaning}
                  {item.partOfSpeech && (
                    <span className="ml-2 opacity-60">· {item.partOfSpeech}</span>
                  )}
                </div>
                <div className="mt-0.5 text-xs text-muted opacity-50">
                  {romajiOf(item.reading)}
                </div>
              </div>

              {/* One dot per rung of this word's ladder — a glanceable level. */}
              <div className="flex shrink-0 items-center gap-1" aria-hidden>
                {Array.from({ length: rungs }, (_, rung) => (
                  <span
                    key={rung}
                    className={`h-1.5 w-1.5 rounded-full ${
                      (state?.level ?? 0) > rung ? "bg-accent" : "bg-surface-raised"
                    }`}
                  />
                ))}
              </div>
              <span className="w-16 shrink-0 text-right text-xs text-muted">
                {done ? "mastered" : `${state?.level ?? 0}/${rungs}`}
              </span>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={handleReset}
        className="focus-ring mt-6 rounded-lg px-2 py-1 text-sm text-muted transition-colors hover:text-wrong"
      >
        Reset progress
      </button>
    </div>
  );
}
