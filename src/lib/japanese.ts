import { isKanji, toHiragana, toRomaji } from "wanakana";

import type { Grade } from "./types";

/** True if the word is written with at least one kanji (so a reading question makes sense). */
export function hasKanji(term: string): boolean {
  return [...term].some((char) => isKanji(char));
}

/**
 * The vowel a kana ends on ("a" | "i" | "u" | "e" | "o"), or null for ん and
 * anything that isn't a kana. Used to expand long-vowel marks.
 */
function vowelOf(kana: string): string | null {
  const romaji = toRomaji(kana);
  const last = romaji.slice(-1);
  return "aiueo".includes(last) ? last : null;
}

const VOWEL_KANA: Record<string, string> = {
  a: "あ",
  i: "い",
  u: "う",
  e: "え",
  o: "お",
};

/**
 * Collapse the many ways the same Japanese sound gets written so that typed
 * answers can be compared. Handles romaji input, katakana, long-vowel marks,
 * and the ぢ/づ vs じ/ず ambiguity that trips up romaji typists.
 *
 * コーヒー, こーひー and "koohii" all canonicalise to こおひい.
 */
export function canonicalKana(input: string): string {
  // passRomaji: false means romaji gets converted too, which is what we want —
  // the user may type either script.
  let text = toHiragana(input.trim().toLowerCase(), { passRomaji: false });

  // Drop anything that isn't a sound: spaces, punctuation, interpuncts, tildes.
  text = text.replace(/[\s　.,、。・〜~！!？?（）()「」『』]/g, "");

  // Expand ー into the vowel it lengthens: こーひー -> こおひい
  let expanded = "";
  for (const char of text) {
    if (char === "ー" || char === "－" || char === "―") {
      const vowel = vowelOf(expanded.slice(-1));
      if (vowel) expanded += VOWEL_KANA[vowel];
      continue;
    }
    expanded += char;
  }

  // う after an o-sound and い after an e-sound are long vowels in practice:
  // とうきょう -> とおきょお, せんせい -> せんせえ
  let collapsed = "";
  for (const char of expanded) {
    const prevVowel = vowelOf(collapsed.slice(-1));
    if (char === "う" && prevVowel === "o") {
      collapsed += "お";
    } else if (char === "い" && prevVowel === "e") {
      collapsed += "え";
    } else {
      collapsed += char;
    }
  }

  // "tsuzuku" and "tsuduku" should both match つづく.
  return collapsed.replace(/ぢ/g, "じ").replace(/づ/g, "ず");
}

/** Levenshtein edit distance, capped implicitly by the shorter string. */
function editDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    prev = row;
  }
  return prev[b.length];
}

/**
 * Strip the noise that makes two correct English glosses look different:
 * articles, the "to" of an infinitive, parentheticals, punctuation.
 */
function canonicalEnglish(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[.,;:!?"'’`\-–—]/g, " ")
    .replace(/\b(?:a|an|the)\b/g, " ")
    .replace(/^\s*to\s+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Split a meaning field into the individual senses a user could reasonably
 * give: "to eat; to drink (polite)" -> ["to eat", "to drink (polite)"].
 */
export function splitMeanings(meaning: string): string[] {
  return meaning
    .split(/[;,/]|\bor\b/g)
    .map((part) => part.trim())
    .filter(Boolean);
}

/** True when `needle` appears in `haystack` as a run of consecutive whole words. */
function containsPhrase(haystack: string[], needle: string[]): boolean {
  if (!needle.length || needle.length > haystack.length) return false;
  for (let start = 0; start <= haystack.length - needle.length; start++) {
    if (needle.every((word, offset) => haystack[start + offset] === word)) {
      return true;
    }
  }
  return false;
}

/**
 * Grade a typed Japanese answer. Any of `accepts` may be a kanji spelling or a
 * kana reading; both are canonicalised before comparison.
 */
export function gradeJapanese(given: string, accepts: string[]): Grade {
  const answer = given.trim();
  if (!answer) return "incorrect";

  // An exact match on the written form (kanji included) is always correct.
  if (accepts.some((accept) => accept.trim() === answer)) return "correct";

  const canonical = canonicalKana(answer);
  if (!canonical) return "incorrect";

  const targets = accepts.map(canonicalKana).filter(Boolean);
  if (targets.includes(canonical)) return "correct";

  // One slip in a word of reasonable length is "almost" — worth a retype
  // rather than being marked wrong outright.
  const closest = Math.min(...targets.map((t) => editDistance(canonical, t)));
  const shortest = Math.min(...targets.map((t) => t.length));
  if (closest === 1 && shortest >= 3) return "almost";

  return "incorrect";
}

/** Grade a typed English answer against any of the senses in the meaning field. */
export function gradeEnglish(given: string, meaning: string): Grade {
  const answer = canonicalEnglish(given);
  if (!answer) return "incorrect";

  const senses = splitMeanings(meaning).map(canonicalEnglish).filter(Boolean);
  const targets = senses.length ? senses : [canonicalEnglish(meaning)];

  if (targets.includes(answer)) return "correct";

  // Accept a sense the user got right plus extra words they added, e.g.
  // "to eat something" for "to eat". Matching on whole words rather than
  // substrings keeps "teacherr" from counting as "teacher".
  const answerWords = answer.split(" ");
  if (targets.some((t) => containsPhrase(answerWords, t.split(" ")))) {
    return "correct";
  }

  const closest = Math.min(...targets.map((t) => editDistance(answer, t)));
  const shortest = Math.min(...targets.map((t) => t.length));
  if (closest <= Math.max(1, Math.floor(shortest / 6)) && shortest >= 4) {
    return "almost";
  }

  return "incorrect";
}

/** Convert kana to romaji for the "how do I read this" helper line. */
export function romajiOf(kana: string): string {
  return toRomaji(kana);
}
