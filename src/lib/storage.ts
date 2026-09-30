"use client";

import { initialProgress, syncProgress } from "./learn/engine";
import type { SetProgress, StudySet, VocabItem } from "./types";

const SETS_KEY = "kanjiloop:sets";
const PROGRESS_PREFIX = "kanjiloop:progress:";

/** Everything here runs in the browser; guard so pages can still render on the server. */
function available(): boolean {
  return typeof window !== "undefined" && !!window.localStorage;
}

function read<T>(key: string, fallback: T): T {
  if (!available()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  if (!available()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Quota is the realistic failure here — a few thousand words still fit
    // comfortably, but tell the caller rather than losing data silently.
    console.error(`Failed to save ${key}`, error);
    throw new Error(
      "Your browser storage is full. Delete an old set and try again.",
    );
  }
}

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function listSets(): StudySet[] {
  return read<StudySet[]>(SETS_KEY, []).sort(
    (a, b) => b.updatedAt - a.updatedAt,
  );
}

export function getSet(id: string): StudySet | null {
  return listSets().find((set) => set.id === id) ?? null;
}

export function saveSet(set: StudySet): void {
  const sets = read<StudySet[]>(SETS_KEY, []);
  const index = sets.findIndex((existing) => existing.id === set.id);
  const updated = { ...set, updatedAt: Date.now() };
  if (index >= 0) {
    sets[index] = updated;
  } else {
    sets.push(updated);
  }
  write(SETS_KEY, sets);
}

export function createSet(name: string, items: VocabItem[]): StudySet {
  const set: StudySet = {
    id: newId(),
    name: name.trim() || "Untitled set",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    items,
  };
  saveSet(set);
  return set;
}

export function deleteSet(id: string): void {
  write(
    SETS_KEY,
    read<StudySet[]>(SETS_KEY, []).filter((set) => set.id !== id),
  );
  if (available()) window.localStorage.removeItem(PROGRESS_PREFIX + id);
}

/** Load progress for a set, creating or reconciling it against the set's items. */
export function getProgress(set: StudySet): SetProgress {
  const stored = read<SetProgress | null>(PROGRESS_PREFIX + set.id, null);
  if (!stored) return initialProgress(set.id, set.items);
  return syncProgress(stored, set.items);
}

export function saveProgress(progress: SetProgress): void {
  write(PROGRESS_PREFIX + progress.setId, {
    ...progress,
    updatedAt: Date.now(),
  });
}

export function resetProgress(set: StudySet): SetProgress {
  const fresh = initialProgress(set.id, set.items);
  saveProgress(fresh);
  return fresh;
}
