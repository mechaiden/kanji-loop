import { expect, test, type Page } from "@playwright/test";

/**
 * Drives the study UI the way a learner does: no API key needed, because
 * everything except importing and sentence practice runs locally.
 */

const SET = {
  id: "e2e-set",
  name: "E2E Lesson",
  createdAt: 1,
  updatedAt: 1,
  items: [
    { id: "a", term: "食べる", reading: "たべる", meaning: "to eat" },
    { id: "b", term: "飲む", reading: "のむ", meaning: "to drink" },
    { id: "c", term: "先生", reading: "せんせい", meaning: "teacher" },
    { id: "d", term: "学生", reading: "がくせい", meaning: "student" },
    { id: "e", term: "ねこ", reading: "ねこ", meaning: "cat" },
  ],
};

async function seed(page: Page) {
  await page.goto("/");
  await page.evaluate((set) => {
    localStorage.clear();
    localStorage.setItem("kanjiloop:sets", JSON.stringify([set]));
  }, SET);
}

/** Answer whatever is on screen correctly, whichever question type it is. */
async function answerCorrectly(page: Page) {
  const instruction = await page.getByText(/What does this mean\?|Which word is this\?|How is this read\?|Type the reading|Type the meaning|Write this in Japanese/).first().textContent();
  const prompt = (await page.locator(".animate-rise > div").first().textContent())!.trim();

  const item = SET.items.find(
    (candidate) =>
      candidate.term === prompt ||
      candidate.meaning === prompt ||
      candidate.reading === prompt,
  )!;

  const choices = page.locator("ul li button");
  if (await choices.count()) {
    const expected =
      instruction === "What does this mean?"
        ? item.meaning
        : instruction === "How is this read?"
          ? item.reading
          : item.term;
    await choices.filter({ hasText: expected }).first().click();
  } else {
    const typed = instruction === "Type the meaning" ? item.meaning : item.reading;
    await page.locator("input").fill(typed);
    await page.getByRole("button", { name: "Check" }).click();
  }
}

test("a learner can study a set from start to mastery", async ({ page }) => {
  await seed(page);

  await page.goto("/");
  await expect(page.getByText("E2E Lesson")).toBeVisible();
  await expect(page.getByText("5 words · 0 mastered")).toBeVisible();

  await page.getByRole("link", { name: "Start" }).click();
  await expect(page).toHaveURL(/\/learn$/);

  // Seven correct answers should complete a round and show the recap.
  for (let i = 0; i < 7; i++) {
    await answerCorrectly(page);
    await page.waitForTimeout(750);
  }

  await expect(page.getByText("7 of 7 right")).toBeVisible();
  await expect(page.getByRole("button", { name: "Keep going" })).toBeVisible();

  // Progress must survive a reload — it's the only copy there is. Seven
  // questions across five words can't master any of them yet, so the signal is
  // the card switching from "Start" to "Continue".
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Continue" })).toBeVisible();

  const stored = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("kanjiloop:progress:e2e-set") ?? "null"),
  );
  expect(stored.questionsAnswered).toBe(7);
  expect(
    Object.values(stored.states as Record<string, { level: number }>).reduce(
      (sum, state) => sum + state.level,
      0,
    ),
  ).toBe(7);
});

test("a wrong answer shows the correction and requires acknowledgement", async ({
  page,
}) => {
  await seed(page);
  await page.goto("/sets/e2e-set/learn");

  // Every question starts as multiple choice; pick a deliberately wrong option.
  const prompt = (await page.locator(".animate-rise > div").first().textContent())!.trim();
  const item = SET.items.find((candidate) => candidate.term === prompt)!;
  await page
    .locator("ul li button")
    .filter({ hasNotText: item.meaning })
    .first()
    .click();

  await expect(page.getByText("Correct answer")).toBeVisible();
  const continueButton = page.getByRole("button", { name: "Continue" });
  await expect(continueButton).toBeVisible();

  await continueButton.click();
  await expect(page.getByText("Correct answer")).not.toBeVisible();
});

test("a near miss is forgiven once, then graded", async ({ page }) => {
  await seed(page);

  // Put one word at the "type the reading" rung so the typed path is reachable
  // immediately, and leave it as the only word due.
  await page.goto("/");
  await page.evaluate(() => {
    localStorage.setItem(
      "kanjiloop:progress:e2e-set",
      JSON.stringify({
        setId: "e2e-set",
        clock: 0,
        questionsAnswered: 0,
        updatedAt: Date.now(),
        states: {
          a: { itemId: "a", level: 3, dueAt: 0, seen: 3, correct: 3, incorrect: 0, streak: 3 },
          b: { itemId: "b", level: 0, dueAt: 900, seen: 0, correct: 0, incorrect: 0, streak: 0 },
          c: { itemId: "c", level: 0, dueAt: 901, seen: 0, correct: 0, incorrect: 0, streak: 0 },
          d: { itemId: "d", level: 0, dueAt: 902, seen: 0, correct: 0, incorrect: 0, streak: 0 },
          e: { itemId: "e", level: 0, dueAt: 903, seen: 0, correct: 0, incorrect: 0, streak: 0 },
        },
      }),
    );
  });

  await page.goto("/sets/e2e-set/learn");
  await expect(page.getByText("Type the reading")).toBeVisible();

  // たべる with one character wrong.
  await page.locator("input").fill("たべふ");
  await page.getByRole("button", { name: "Check" }).click();
  await expect(page.getByText(/So close/)).toBeVisible();

  // The retype is accepted, and the word was not marked wrong.
  await page.locator("input").fill("taberu");
  await page.getByRole("button", { name: "Check" }).click();
  await expect(page.getByText(/So close/)).not.toBeVisible();
  await expect(page.getByText("Correct answer")).not.toBeVisible();
});
