# Kanjiloop

Photograph a page of your Japanese textbook. Kanjiloop transcribes the vocabulary,
then drills you on it the way Quizlet's Learn mode does — adaptively, and without
ever running out of questions.

## Setup

```bash
npm install
cp .env.example .env.local   # then paste your key into .env.local
npm run dev
```

Open http://localhost:3000.

You need an Anthropic API key from [console.anthropic.com](https://console.anthropic.com)
for the two AI features (reading a page, and generating practice sentences).
**Everything else — all study, all progress — works offline with no key.**

Reading one textbook page costs a few cents.

## How it works

### Importing

Drop in up to 8 photos of one vocabulary list. Images are resized to 1568px in
the browser before upload, which is where Claude downsamples anyway, so a 5MB
phone photo becomes a ~250KB request.

Claude reads the page into a strict schema: term, kana reading, English meaning,
part of speech. It transcribes only what's printed — it won't pad a list of 23
words out to 25. Then you get an editable table to fix anything before saving.
Fix it here: a wrong reading becomes a wrong answer you have to unlearn later.

### The learn loop

Each word climbs a ladder of question types, easiest to hardest:

| | Kanji word (食べる) | Kana-only word (ねこ) |
|---|---|---|
| 1 | see 食べる, pick "to eat" | see ねこ, pick "cat" |
| 2 | see 食べる, pick たべる | see "cat", pick ねこ |
| 3 | see "to eat", pick 食べる | type the meaning |
| 4 | type the reading | type it in Japanese |
| 5 | type the meaning | |
| 6 | type it in Japanese | |

Kana-only words skip the reading rungs, where the answer is just the prompt
copied back.

A right answer moves a word up a rung and pushes it further into the future. A
wrong answer moves it down one and brings it back within a couple of questions.
So the words you don't know keep coming around, and the ones you do know fade
out — that's the whole trick.

**A near miss costs nothing.** Answers within one character are graded "almost",
and you retype without losing a rung. A second near miss counts as wrong.

**It never runs out.** Once every word is mastered, the session shifts to review
mode and keeps cycling the hardest question types indefinitely.

### Typing Japanese

You never need an IME. Type romaji and it's matched against the kana — `taberu`,
`たべる` and `食べる` are all accepted for 食べる. The grader also folds together
the things that trip up romaji typists: long vowels (`koohii` = コーヒー),
`ou`/`oo` (とうきょう = とおきょお), and `zu`/`du` (つづく = `tsuzuku`).

English answers ignore articles and the infinitive "to", accept any sense listed
in the meaning, and allow extra words around a correct answer.

### Sentence practice

A separate mode that generates fill-in-the-blank sentences from your set, weighted
toward the words you're weakest on, and restricted to vocabulary you've already
seen. It prefetches ahead so there's no wait between questions. This is the part
that's genuinely unlimited — new sentences every time.

## Keyboard

The learn session is fully keyboard-driven: `1`–`4` pick a multiple-choice
answer, `Enter` submits a typed answer and moves past a correction.

## Your data

Sets and progress live in your browser's `localStorage` under the `kanjiloop:`
prefix. Nothing is uploaded except the images you import and the words sent to
generate practice sentences. Clearing site data erases your progress, and it
does not sync between browsers or machines.

## Tests

```bash
npm test        # unit — grading and the scheduler
npm run test:e2e   # browser — drives the real study UI
```

The unit suite covers the two pieces most likely to break silently: answer
grading (`src/lib/japanese.test.ts`) and the scheduler
(`src/lib/learn/engine.test.ts`), which is tested by simulating whole study
sessions and asserting they converge — a perfect learner masters every word in
roughly one question per rung, and a word the learner keeps missing gets drilled
more than the rest and never reaches mastery.

The end-to-end suite seeds a set into `localStorage` and studies it through the
real UI, so it needs no API key. It uses the Chrome already installed on your
machine rather than downloading its own browser.

`npx playwright test screenshot` writes current screenshots to `screenshots/`.

## Layout

```
src/
  app/
    page.tsx                    your sets
    import/                     photo -> editable vocab table
    sets/[id]/                  set detail
    sets/[id]/learn/            the learn session
    sets/[id]/sentences/        generated cloze practice
    api/extract/                image -> structured vocab (Claude vision)
    api/practice/               vocab -> fill-in-the-blank sentences
  lib/
    japanese.ts                 kana normalisation + answer grading
    learn/engine.ts             the ladder, the scheduler, question building
    storage.ts                  localStorage persistence
    image.ts                    client-side resize before upload
```

The engine is pure functions with no React and no I/O, which is why it can be
tested by simulation.
