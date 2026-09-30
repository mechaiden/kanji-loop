import { gradeEnglish, gradeJapanese, hasKanji, splitMeanings } from "../japanese";
import type {
  Grade,
  ItemState,
  Question,
  QuestionKind,
  SetProgress,
  VocabItem,
} from "../types";

/** Questions per round before we break for a recap. */
export const ROUND_SIZE = 7;

/**
 * The ladder each item climbs. Recognition first (pick from four), then recall
 * (type it), and Japanese production last. Words written only in kana skip the
 * reading rungs, where the answer would just be the prompt copied back.
 */
export function ladderFor(item: VocabItem): QuestionKind[] {
  const readingIsDistinct =
    hasKanji(item.term) && item.reading.trim() !== item.term.trim();

  return readingIsDistinct
    ? ["mc-jp-en", "mc-reading", "mc-en-jp", "type-reading", "type-en", "type-jp"]
    : ["mc-jp-en", "mc-en-jp", "type-en", "type-jp"];
}

/** Hardest rungs, cycled forever once an item is mastered. */
const REVIEW_KINDS: QuestionKind[] = ["type-en", "type-jp", "type-reading"];

export function isMastered(item: VocabItem, state: ItemState): boolean {
  return state.level >= ladderFor(item).length;
}

export function initialState(itemId: string, index: number): ItemState {
  return {
    itemId,
    level: 0,
    // Stagger the initial due times so the first round isn't in set order.
    dueAt: index,
    seen: 0,
    correct: 0,
    incorrect: 0,
    streak: 0,
  };
}

export function initialProgress(setId: string, items: VocabItem[]): SetProgress {
  const states: Record<string, ItemState> = {};
  items.forEach((item, index) => {
    states[item.id] = initialState(item.id, index);
  });
  return {
    setId,
    states,
    clock: 0,
    questionsAnswered: 0,
    updatedAt: Date.now(),
  };
}

/**
 * Reconcile stored progress with the current set — items added since the last
 * session get fresh state, and states for deleted items are dropped.
 */
export function syncProgress(
  progress: SetProgress,
  items: VocabItem[],
): SetProgress {
  const states: Record<string, ItemState> = {};
  items.forEach((item, index) => {
    states[item.id] =
      progress.states[item.id] ?? initialState(item.id, progress.clock + index);
  });
  return { ...progress, states };
}

function shuffle<T>(input: T[]): T[] {
  const out = [...input];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Pick distractors for a multiple-choice question. Drawing from the same set
 * keeps them plausible — they're words from the same textbook chapter.
 */
function distractors(
  items: VocabItem[],
  target: VocabItem,
  project: (item: VocabItem) => string,
  count = 3,
): string[] {
  const targetValue = project(target);
  const pool = new Set<string>();
  for (const item of shuffle(items)) {
    if (item.id === target.id) continue;
    const value = project(item);
    if (!value || value === targetValue) continue;
    pool.add(value);
    if (pool.size >= count) break;
  }
  return [...pool];
}

function primaryMeaning(item: VocabItem): string {
  return splitMeanings(item.meaning)[0] ?? item.meaning;
}

export function buildQuestion(
  item: VocabItem,
  kind: QuestionKind,
  items: VocabItem[],
): Question {
  switch (kind) {
    case "mc-jp-en": {
      const correct = primaryMeaning(item);
      return {
        itemId: item.id,
        kind,
        prompt: item.term,
        hint: item.partOfSpeech,
        choices: shuffle([correct, ...distractors(items, item, primaryMeaning)]),
        correctChoice: correct,
        answerLabel: item.meaning,
      };
    }

    case "mc-en-jp": {
      return {
        itemId: item.id,
        kind,
        prompt: item.meaning,
        hint: item.partOfSpeech,
        choices: shuffle([
          item.term,
          ...distractors(items, item, (other) => other.term),
        ]),
        correctChoice: item.term,
        answerLabel: item.term,
        answerReading: item.reading,
      };
    }

    case "mc-reading": {
      return {
        itemId: item.id,
        kind,
        prompt: item.term,
        hint: item.meaning,
        choices: shuffle([
          item.reading,
          ...distractors(items, item, (other) => other.reading),
        ]),
        correctChoice: item.reading,
        answerLabel: item.reading,
        answerReading: item.reading,
      };
    }

    case "type-reading": {
      return {
        itemId: item.id,
        kind,
        prompt: item.term,
        hint: item.meaning,
        accepts: [item.reading],
        answerLabel: item.reading,
        answerReading: item.reading,
      };
    }

    case "type-en": {
      return {
        itemId: item.id,
        kind,
        prompt: item.term,
        hint: item.partOfSpeech,
        answerLabel: item.meaning,
      };
    }

    case "type-jp": {
      // Either script is fine here — the point is recalling the word, and not
      // everyone studies with an IME switched on.
      return {
        itemId: item.id,
        kind,
        prompt: item.meaning,
        hint: item.partOfSpeech,
        accepts: [item.term, item.reading],
        answerLabel:
          item.term === item.reading ? item.term : `${item.term} (${item.reading})`,
        answerReading: item.reading,
      };
    }
  }
}

export function gradeAnswer(
  question: Question,
  item: VocabItem,
  given: string,
): Grade {
  if (question.choices) {
    return given === question.correctChoice ? "correct" : "incorrect";
  }
  if (question.kind === "type-en") {
    return gradeEnglish(given, item.meaning);
  }
  return gradeJapanese(given, question.accepts ?? []);
}

/**
 * How far ahead to reschedule an item after a correct answer. Later rungs wait
 * longer, so early words keep cycling while mastered ones drift to the back.
 */
function spacing(level: number): number {
  return 4 + level * 5 + Math.floor(Math.random() * 4);
}

export function applyGrade(
  state: ItemState,
  item: VocabItem,
  grade: Grade,
  clock: number,
): ItemState {
  const ladderLength = ladderFor(item).length;
  const next: ItemState = {
    ...state,
    seen: state.seen + 1,
    lastAnsweredAt: Date.now(),
  };

  if (grade === "correct") {
    next.correct = state.correct + 1;
    next.streak = state.streak + 1;
    next.level = Math.min(state.level + 1, ladderLength);
    next.dueAt = clock + spacing(next.level);
  } else if (grade === "almost") {
    // A typo shouldn't cost a rung, but the word comes back soon.
    next.streak = 0;
    next.dueAt = clock + 3;
  } else {
    next.incorrect = state.incorrect + 1;
    next.streak = 0;
    next.level = Math.max(0, state.level - 1);
    next.dueAt = clock + 2;
  }

  return next;
}

export type NextQuestion = {
  question: Question;
  item: ItemState;
  /** True once every item is mastered and we're cycling for retention. */
  review: boolean;
};

/**
 * Choose what to ask next: the item that has been waiting longest, skipping
 * whatever was just asked so the same word never appears twice in a row.
 *
 * Returns null only for an empty set — once everything is mastered this keeps
 * serving review questions indefinitely.
 */
export function nextQuestion(
  items: VocabItem[],
  progress: SetProgress,
  lastItemId?: string,
): NextQuestion | null {
  if (!items.length) return null;

  const byId = new Map(items.map((item) => [item.id, item]));
  const candidates = items
    .map((item) => progress.states[item.id])
    .filter((state): state is ItemState => Boolean(state));
  if (!candidates.length) return null;

  const unmastered = candidates.filter((state) => {
    const item = byId.get(state.itemId);
    return item ? !isMastered(item, state) : false;
  });

  const review = unmastered.length === 0;
  const pool = review ? candidates : unmastered;

  // Prefer not to repeat the previous item, but do if it's the only one left.
  const withoutLast = pool.filter((state) => state.itemId !== lastItemId);
  const usable = withoutLast.length ? withoutLast : pool;

  const chosen = usable.reduce((best, state) =>
    state.dueAt < best.dueAt ? state : best,
  );
  const item = byId.get(chosen.itemId);
  if (!item) return null;

  const ladder = ladderFor(item);
  const kind = review
    ? REVIEW_KINDS.filter((k) => ladder.includes(k))[
        Math.floor(Math.random() * REVIEW_KINDS.filter((k) => ladder.includes(k)).length)
      ] ?? ladder[ladder.length - 1]
    : ladder[Math.min(chosen.level, ladder.length - 1)];

  return { question: buildQuestion(item, kind, items), item: chosen, review };
}

export type MasterySummary = {
  mastered: number;
  total: number;
  /** 0–1 across every rung of every item, so the bar moves on every answer. */
  percent: number;
};

export function masterySummary(
  items: VocabItem[],
  progress: SetProgress,
): MasterySummary {
  if (!items.length) return { mastered: 0, total: 0, percent: 0 };

  let rungs = 0;
  let climbed = 0;
  let mastered = 0;

  for (const item of items) {
    const state = progress.states[item.id];
    const ladderLength = ladderFor(item).length;
    rungs += ladderLength;
    if (!state) continue;
    climbed += Math.min(state.level, ladderLength);
    if (isMastered(item, state)) mastered += 1;
  }

  return {
    mastered,
    total: items.length,
    percent: rungs === 0 ? 0 : climbed / rungs,
  };
}
