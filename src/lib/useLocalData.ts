"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export type LocalData<T> = {
  /** null until the first read completes. */
  data: T;
  /** False on the server and during the first client render. */
  ready: boolean;
  /** Re-read from storage, e.g. after deleting a set. */
  reload: () => void;
  /** Update in place, for state the page owns for the rest of the session. */
  setData: Dispatch<SetStateAction<T>>;
};

/**
 * Read browser-only state (localStorage) after mount.
 *
 * The first render must not touch localStorage: the server renders without it,
 * so reading during render would produce a hydration mismatch. Every page that
 * loads a set therefore renders a placeholder, then reads once mounted.
 *
 * This hook exists so that pattern — and the lint suppression it needs — lives
 * in exactly one place rather than in every page.
 */
export function useLocalData<T>(
  load: () => T,
  deps: unknown[] = [],
): LocalData<T | null> {
  const [data, setData] = useState<T | null>(null);
  const [ready, setReady] = useState(false);

  function reload() {
    setData(load());
    setReady(true);
  }

  // localStorage is an external system and this is the synchronisation point:
  // reading it is the whole purpose of the effect. `deps` is the caller's key
  // (a set id), so this re-reads when the page navigates to a different set.
  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  useEffect(reload, deps);

  return { data, ready, reload, setData };
}
