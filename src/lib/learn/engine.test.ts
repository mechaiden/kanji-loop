import { describe, expect, it } from "vitest";

import type { SetProgress, VocabItem } from "../types";
import {
  applyGrade,
  gradeAnswer,
  initialProgress,
  isMastered,
  ladderFor,
  masterySummary,
  nextQuestion,
} from "./engine";

const ITEMS: VocabItem[] = [
  { id: "a", term: "食べる", reading: "たべる", meaning: "to eat" },
  { id: "b", term: "飲む", reading: "のむ", meaning: "to drink" },
  { id: "c", term: "先生", reading: "せんせい", meaning: "teacher" },
  { id: "d", term: "学生", reading: "がくせい", meaning: "student" },
  { id: "e", term: "コーヒー", reading: "コーヒー", meaning: "coffee" },
  { id: "f", term: "ねこ", reading: "ねこ", meaning: "cat" },
];

/**
 * Drive a whole session. `answer` decides what the simulated learner types,
 * so a test can model a perfect learner or one with a blind spot.
 */
function runSession(
  items: VocabItem[],
  answer: (itemId: string, correct: string) => string,
  maxQuestions = 2000,
) {
  let progress: SetProgress = initialProgress("set", items);
  let lastItemId: string | undefined;
  const asked: string[] = [];

  for (let i = 0; i < maxQuestions; i++) {
    const next = nextQuestion(items, progress, lastItemId);
    if (!next) break;
    if (next.review) break; // everything mastered — stop the drill

    const item = items.find((candidate) => candidate.id === next.question.itemId)!;
    // `answerLabel` is for display ("食べる (たべる)"); what a learner would
    // actually type is a choice, an accepted form, or the meaning.
    const correct =
      next.question.correctChoice ?? next.question.accepts?.[0] ?? item.meaning;
    const given = answer(item.id, correct);
    const grade = gradeAnswer(next.question, item, given);

    const clock = progress.clock + 1;
    progress = {
      ...progress,
      clock,
      questionsAnswered: progress.questionsAnswered + 1,
      states: {
        ...progress.states,
        [item.id]: applyGrade(progress.states[item.id], item, grade, clock),
      },
    };
    asked.push(item.id);
    lastItemId = item.id;
  }

  return { progress, asked };
}

describe("ladderFor", () => {
  it("gives kanji words a reading rung", () => {
    expect(ladderFor(ITEMS[0])).toContain("mc-reading");
    expect(ladderFor(ITEMS[0])).toContain("type-reading");
  });

  it("skips reading rungs for kana-only words, where the answer is the prompt", () => {
    expect(ladderFor(ITEMS[4])).not.toContain("mc-reading");
    expect(ladderFor(ITEMS[5])).not.toContain("type-reading");
  });
});

describe("nextQuestion", () => {
  it("always offers the correct answer among the choices", () => {
    const progress = initialProgress("set", ITEMS);
    for (let i = 0; i < 50; i++) {
      const next = nextQuestion(ITEMS, progress)!;
      if (!next.question.choices) continue;
      expect(next.question.choices).toContain(next.question.correctChoice);
      // Duplicated choices would give the answer away.
      expect(new Set(next.question.choices).size).toBe(next.question.choices.length);
    }
  });

  it("never asks the same word twice in a row", () => {
    const { asked } = runSession(ITEMS, (_id, correct) => correct);
    for (let i = 1; i < asked.length; i++) {
      expect(asked[i]).not.toBe(asked[i - 1]);
    }
  });

  it("keeps serving review questions once everything is mastered", () => {
    const progress = initialProgress("set", ITEMS);
    // Force every item to the top of its ladder.
    for (const item of ITEMS) {
      progress.states[item.id] = {
        ...progress.states[item.id],
        level: ladderFor(item).length,
      };
    }
    const next = nextQuestion(ITEMS, progress);
    expect(next).not.toBeNull();
    expect(next!.review).toBe(true);
  });

  it("returns null only for an empty set", () => {
    expect(nextQuestion([], initialProgress("set", []))).toBeNull();
  });
});

describe("a full session", () => {
  it("masters every word for a learner who answers correctly", () => {
    const { progress, asked } = runSession(ITEMS, (_id, correct) => correct);

    for (const item of ITEMS) {
      expect(isMastered(item, progress.states[item.id])).toBe(true);
    }
    expect(masterySummary(ITEMS, progress).percent).toBe(1);

    // Mastery should cost roughly one question per rung, not hundreds.
    const rungs = ITEMS.reduce((sum, item) => sum + ladderFor(item).length, 0);
    expect(asked.length).toBeLessThanOrEqual(rungs + ITEMS.length);
  });

  it("holds back the one word the learner keeps missing", () => {
    const { progress } = runSession(
      ITEMS,
      (itemId, correct) => (itemId === "c" ? "まちがい" : correct),
      600,
    );

    expect(isMastered(ITEMS[2], progress.states.c)).toBe(false);
    for (const item of ITEMS.filter((candidate) => candidate.id !== "c")) {
      expect(isMastered(item, progress.states[item.id])).toBe(true);
    }
  });

  it("drills the missed word more often than the rest", () => {
    const { asked } = runSession(
      ITEMS,
      (itemId, correct) => (itemId === "c" ? "まちがい" : correct),
      600,
    );

    const counts = asked.reduce<Record<string, number>>((tally, id) => {
      tally[id] = (tally[id] ?? 0) + 1;
      return tally;
    }, {});
    const others = ITEMS.filter((item) => item.id !== "c").map(
      (item) => counts[item.id] ?? 0,
    );
    expect(counts.c).toBeGreaterThan(Math.max(...others));
  });
});

describe("applyGrade", () => {
  it("advances a rung on a correct answer and drops one on a wrong answer", () => {
    const item = ITEMS[0];
    const start = initialProgress("set", [item]).states[item.id];

    const up = applyGrade(start, item, "correct", 1);
    expect(up.level).toBe(1);

    const down = applyGrade(up, item, "incorrect", 2);
    expect(down.level).toBe(0);
  });

  it("costs no progress for a near miss, but reschedules it soon", () => {
    const item = ITEMS[0];
    const start = applyGrade(
      initialProgress("set", [item]).states[item.id],
      item,
      "correct",
      1,
    );

    const almost = applyGrade(start, item, "almost", 10);
    expect(almost.level).toBe(start.level);
    expect(almost.dueAt).toBeLessThanOrEqual(13);
  });

  it("never drops below the first rung or climbs past the last", () => {
    const item = ITEMS[0];
    let state = initialProgress("set", [item]).states[item.id];

    for (let i = 0; i < 10; i++) state = applyGrade(state, item, "incorrect", i);
    expect(state.level).toBe(0);

    for (let i = 0; i < 20; i++) state = applyGrade(state, item, "correct", i);
    expect(state.level).toBe(ladderFor(item).length);
  });
});
