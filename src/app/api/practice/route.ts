import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const maxDuration = 300;

const RequestSchema = z.object({
  /** The words to build sentences around — normally the ones being studied. */
  items: z
    .array(
      z.object({
        term: z.string().min(1),
        reading: z.string(),
        meaning: z.string(),
      }),
    )
    .min(1)
    .max(40),
  count: z.number().int().min(1).max(12).default(6),
  /** Everything the learner has seen, so sentences stay inside their vocabulary. */
  known: z.array(z.string()).max(400).default([]),
});

const PracticeSchema = z.object({
  questions: z.array(
    z.object({
      term_index: z
        .number()
        .int()
        .describe("0-based index into the provided items array."),
      sentence_with_blank: z
        .string()
        .describe(
          "The Japanese sentence with the target word replaced by ＿＿＿. Conjugate naturally; the blank may stand for an inflected form.",
        ),
      answer: z
        .string()
        .describe(
          "Exactly the text that belongs in the blank, in the form it takes in the sentence.",
        ),
      answer_reading: z
        .string()
        .describe("Kana reading of the answer, for learners typing romaji."),
      full_sentence: z.string().describe("The complete sentence, blank filled in."),
      english: z.string().describe("Natural English translation of the sentence."),
    }),
  ),
});

const SYSTEM_PROMPT = `You write fill-in-the-blank practice sentences for a learner of Japanese.

For each sentence:
- Use one target word from the provided list and replace exactly that word with ＿＿＿.
- Conjugate the target word to fit the sentence. The answer field must match the inflected form that belongs in the blank, not the dictionary form.
- Keep every OTHER word in the sentence within the learner's known vocabulary, plus basic particles, numbers, and です/ます forms. Never introduce an unfamiliar kanji compound just to make the sentence interesting.
- Make the sentence short — 6 to 14 characters of context is plenty — and make the context actually disambiguate the answer. A sentence where three different words would fit is a bad question.
- Vary the situation, the politeness level, and the sentence pattern across the batch. Do not write the same frame with different nouns.
- Write natural Japanese, not translated English.`;

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      {
        error:
          "No ANTHROPIC_API_KEY found. Add your key to .env.local to use sentence practice.",
      },
      { status: 503 },
    );
  }

  let body: z.infer<typeof RequestSchema>;
  try {
    body = RequestSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid practice request." }, { status: 400 });
  }

  const client = new Anthropic();
  const itemList = body.items
    .map(
      (item, index) =>
        `${index}. ${item.term} (${item.reading}) — ${item.meaning}`,
    )
    .join("\n");

  try {
    const response = await client.messages.parse({
      model: "claude-opus-5",
      max_tokens: 8000,
      thinking: { type: "adaptive" },
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Target words:\n${itemList}\n\nAlso known (safe to use in sentences): ${
            body.known.join("、") || "(nothing else yet — keep sentences very simple)"
          }\n\nWrite ${body.count} fill-in-the-blank sentences. Spread them across different target words.`,
        },
      ],
      output_config: { format: zodOutputFormat(PracticeSchema) },
    });

    if (response.stop_reason === "refusal" || !response.parsed_output) {
      return NextResponse.json(
        { error: "Could not generate practice sentences. Try again." },
        { status: 422 },
      );
    }

    const questions = response.parsed_output.questions.filter(
      (question) =>
        question.term_index >= 0 && question.term_index < body.items.length,
    );

    return NextResponse.json({ questions });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return NextResponse.json(
        { error: "Your ANTHROPIC_API_KEY was rejected." },
        { status: 401 },
      );
    }
    console.error("Practice generation failed", error);
    return NextResponse.json(
      { error: "Sentence practice is unavailable right now." },
      { status: 500 },
    );
  }
}
