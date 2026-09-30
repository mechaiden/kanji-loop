"use client";

import Link from "next/link";

import ProgressBar from "@/components/ProgressBar";
import { masterySummary } from "@/lib/learn/engine";
import { deleteSet, getProgress, listSets } from "@/lib/storage";
import { useLocalData } from "@/lib/useLocalData";
import type { StudySet } from "@/lib/types";

type SetRow = {
  set: StudySet;
  mastered: number;
  total: number;
  percent: number;
};

export default function LibraryPage() {
  const { data: rows, ready, reload } = useLocalData<SetRow[]>(() =>
    listSets().map((set) => ({
      set,
      ...masterySummary(set.items, getProgress(set)),
    })),
  );

  function handleDelete(set: StudySet) {
    if (!confirm(`Delete "${set.name}" and its progress? This can't be undone.`)) {
      return;
    }
    deleteSet(set.id);
    reload();
  }

  if (!ready || !rows) {
    return <div className="h-40 animate-pulse rounded-xl bg-surface" />;
  }

  if (rows.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <div className="jp mb-4 text-5xl">単語</div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Photograph a vocab list. Study it forever.
        </h1>
        <p className="mt-3 text-muted">
          Point your camera at a page of your textbook. Kanjiloop reads the kanji,
          readings, and meanings, then drills you on them until you know them
          cold — and keeps going after that.
        </p>
        <Link
          href="/import"
          className="focus-ring mt-8 inline-block rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
        >
          Import your first page
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">Your sets</h1>
      <ul className="space-y-3">
        {rows.map(({ set, mastered, total, percent }) => (
          <li
            key={set.id}
            className="rounded-xl border border-border bg-surface transition-colors hover:border-accent/40"
          >
            <div className="flex items-center gap-4 p-4">
              <Link href={`/sets/${set.id}`} className="focus-ring min-w-0 flex-1 rounded">
                <div className="truncate font-medium">{set.name}</div>
                <div className="mt-0.5 text-sm text-muted">
                  {total} {total === 1 ? "word" : "words"} · {mastered} mastered
                </div>
                <ProgressBar value={percent} className="mt-3" />
              </Link>
              <Link
                href={`/sets/${set.id}/learn`}
                className="focus-ring shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {percent === 0 ? "Start" : "Continue"}
              </Link>
              <button
                type="button"
                onClick={() => handleDelete(set)}
                aria-label={`Delete ${set.name}`}
                className="focus-ring shrink-0 rounded-lg p-2 text-muted transition-colors hover:text-wrong"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
