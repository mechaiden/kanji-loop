/** A single vocabulary entry, usually one row of a textbook vocab list. */
export type VocabItem = {
  id: string;
  /** How the word is written in the textbook: 食べる, 先生, コーヒー */
  term: string;
  /** Kana reading of `term`: たべる, せんせい, コーヒー */
  reading: string;
  /** English meaning. May hold several senses separated by ";" or "," */
  meaning: string;
  /** "verb (ru)", "i-adjective", "noun", ... — free text, may be empty */
  partOfSpeech?: string;
  /** Usage notes, transitivity, counters, politeness level */
  notes?: string;
  example?: ExampleSentence;
};

export type ExampleSentence = {
  jp: string;
  reading?: string;
  en: string;
};

export type StudySet = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  items: VocabItem[];
};

/**
 * The six ways we can ask about a word, ordered easiest to hardest.
 * The learn engine walks each item up this ladder.
 */
export type QuestionKind =
  | "mc-jp-en" // see 食べる, pick "to eat"
  | "mc-en-jp" // see "to eat", pick 食べる
  | "mc-reading" // see 食べる, pick たべる
  | "type-reading" // see 食べる + "to eat", type たべる
  | "type-en" // see 食べる, type "to eat"
  | "type-jp"; // see "to eat", type たべる / 食べる

export type Question = {
  itemId: string;
  kind: QuestionKind;
  prompt: string;
  /** Secondary line under the prompt (part of speech, or the meaning as a hint) */
  hint?: string;
  /** Present for multiple-choice kinds. Exactly one is correct. */
  choices?: string[];
  correctChoice?: string;
  /** Everything the grader needs to judge a typed answer. */
  accepts?: string[];
  /** What we show as "the answer" on the review card — display only. */
  answerLabel: string;
  /** Kana reading of the answer, for the romaji line under a Japanese answer. */
  answerReading?: string;
  /** Cloze questions carry the generated sentence for display after answering. */
  cloze?: ExampleSentence;
};

export type Grade = "correct" | "almost" | "incorrect";

/** Per-item learning state, persisted so a session can be resumed. */
export type ItemState = {
  itemId: string;
  /** Index into the item's question ladder. Equals ladder length once mastered. */
  level: number;
  /** Virtual scheduling clock — lower means due sooner. */
  dueAt: number;
  seen: number;
  correct: number;
  incorrect: number;
  /** Consecutive correct answers at the current level. */
  streak: number;
  lastAnsweredAt?: number;
};

export type SetProgress = {
  setId: string;
  states: Record<string, ItemState>;
  /** Monotonic counter driving `dueAt`; incremented once per question asked. */
  clock: number;
  questionsAnswered: number;
  updatedAt: number;
};

/** One answered question, kept for the end-of-round recap. */
export type RoundEntry = {
  question: Question;
  given: string;
  grade: Grade;
};
