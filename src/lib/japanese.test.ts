import { describe, expect, it } from "vitest";

import {
  canonicalKana,
  gradeEnglish,
  gradeJapanese,
  hasKanji,
  splitMeanings,
} from "./japanese";

describe("canonicalKana", () => {
  it("accepts romaji, katakana and hiragana as the same word", () => {
    const forms = ["コーヒー", "こーひー", "koohii", "KOOHII"];
    const canonical = forms.map(canonicalKana);
    expect(new Set(canonical).size).toBe(1);
  });

  it("treats a long-vowel mark as the vowel it lengthens", () => {
    expect(canonicalKana("ラーメン")).toBe(canonicalKana("raamen"));
  });

  it("normalises う after an o-sound and い after an e-sound", () => {
    expect(canonicalKana("とうきょう")).toBe(canonicalKana("とおきょお"));
    expect(canonicalKana("せんせい")).toBe(canonicalKana("せんせえ"));
  });

  it("folds the ぢ/じ and づ/ず romaji ambiguity", () => {
    expect(canonicalKana("つづく")).toBe(canonicalKana("tsuzuku"));
  });

  it("ignores spacing and punctuation", () => {
    expect(canonicalKana(" たべる。")).toBe(canonicalKana("たべる"));
  });
});

describe("gradeJapanese", () => {
  it("accepts the kana reading and the kanji spelling", () => {
    expect(gradeJapanese("たべる", ["食べる", "たべる"])).toBe("correct");
    expect(gradeJapanese("食べる", ["食べる", "たべる"])).toBe("correct");
  });

  it("accepts romaji typed without an IME", () => {
    expect(gradeJapanese("taberu", ["食べる", "たべる"])).toBe("correct");
    expect(gradeJapanese("sensei", ["先生", "せんせい"])).toBe("correct");
  });

  it("flags a single-character slip as almost, not wrong", () => {
    expect(gradeJapanese("たべふ", ["たべる"])).toBe("almost");
  });

  it("rejects a different word outright", () => {
    expect(gradeJapanese("のむ", ["食べる", "たべる"])).toBe("incorrect");
  });

  it("does not forgive a slip in a two-character word", () => {
    // ねこ vs いぬ is one edit apart in neither form, but short words in
    // general must not slide through on edit distance.
    expect(gradeJapanese("いえ", ["うえ"])).toBe("incorrect");
  });

  it("rejects an empty answer", () => {
    expect(gradeJapanese("   ", ["たべる"])).toBe("incorrect");
  });
});

describe("gradeEnglish", () => {
  it("ignores articles and the infinitive 'to'", () => {
    expect(gradeEnglish("eat", "to eat")).toBe("correct");
    expect(gradeEnglish("the teacher", "teacher")).toBe("correct");
  });

  it("accepts any sense listed in the meaning", () => {
    expect(gradeEnglish("professor", "teacher; professor")).toBe("correct");
    expect(gradeEnglish("expensive", "expensive, tall")).toBe("correct");
  });

  it("accepts an answer that contains the sense plus extra words", () => {
    expect(gradeEnglish("to eat something", "to eat")).toBe("correct");
  });

  it("is case and punctuation insensitive", () => {
    expect(gradeEnglish("Teacher.", "teacher")).toBe("correct");
  });

  it("flags a typo as almost", () => {
    expect(gradeEnglish("teacherr", "teacher")).toBe("almost");
  });

  it("rejects a wrong meaning", () => {
    expect(gradeEnglish("to drink", "to eat")).toBe("incorrect");
  });
});

describe("splitMeanings", () => {
  it("splits on the separators textbooks actually use", () => {
    expect(splitMeanings("teacher; professor")).toEqual(["teacher", "professor"]);
    expect(splitMeanings("big/large")).toEqual(["big", "large"]);
  });
});

describe("hasKanji", () => {
  it("distinguishes kanji words from kana-only words", () => {
    expect(hasKanji("食べる")).toBe(true);
    expect(hasKanji("たべる")).toBe(false);
    expect(hasKanji("コーヒー")).toBe(false);
  });
});
