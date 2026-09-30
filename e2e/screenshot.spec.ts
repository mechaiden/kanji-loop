import { test } from "@playwright/test";

/**
 * Not an assertion — a quick way to eyeball the study screens.
 * Run with: npx playwright test screenshot
 */

const SET = {
  id: "shot-set",
  name: "Genki Lesson 3",
  createdAt: 1,
  updatedAt: 1,
  items: [
    { id: "a", term: "食べる", reading: "たべる", meaning: "to eat", partOfSpeech: "ru-verb" },
    { id: "b", term: "飲む", reading: "のむ", meaning: "to drink", partOfSpeech: "u-verb" },
    { id: "c", term: "先生", reading: "せんせい", meaning: "teacher", partOfSpeech: "noun" },
    { id: "d", term: "学生", reading: "がくせい", meaning: "student", partOfSpeech: "noun" },
    { id: "e", term: "図書館", reading: "としょかん", meaning: "library", partOfSpeech: "noun" },
    { id: "f", term: "コーヒー", reading: "コーヒー", meaning: "coffee", partOfSpeech: "noun" },
  ],
};

test("capture the study screens", async ({ page }) => {
  await page.setViewportSize({ width: 1100, height: 900 });
  await page.goto("/");
  await page.evaluate((set) => {
    localStorage.clear();
    localStorage.setItem("kanjiloop:sets", JSON.stringify([set]));
  }, SET);

  await page.goto("/");
  await page.screenshot({ path: "screenshots/library.png" });

  await page.goto("/sets/shot-set");
  await page.screenshot({ path: "screenshots/set.png" });

  await page.goto("/sets/shot-set/learn");
  await page.waitForTimeout(400);
  await page.screenshot({ path: "screenshots/learn.png" });
});
