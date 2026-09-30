import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const maxDuration = 300;

const SUPPORTED_MEDIA_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
] as const;

const RequestSchema = z.object({
  images: z
    .array(
      z.object({
        media_type: z.enum(SUPPORTED_MEDIA_TYPES),
        data: z.string().min(1),
      }),
    )
    .min(1)
    .max(8),
});

/**
 * Every field is required so the model can't quietly omit one; "" and null are
 * the documented ways to say "not on the page".
 */
const ExtractionSchema = z.object({
  set_name: z
    .string()
    .describe(
      "A short name for this vocabulary set, taken from the chapter or lesson heading if one is visible, e.g. 'Genki L3: Daily Life'. Otherwise describe the content, e.g. 'Time and Numbers'.",
    ),
  items: z.array(
    z.object({
      term: z
        .string()
        .describe(
          "The word exactly as printed, including kanji: 食べる, 先生, コーヒー.",
        ),
      reading: z
        .string()
        .describe(
          "The full kana reading of the whole word: たべる, せんせい. For a word already written in kana, repeat it unchanged.",
        ),
      meaning: z
        .string()
        .describe(
          "The English meaning as printed. Separate multiple senses with '; '.",
        ),
      part_of_speech: z
        .string()
        .describe(
          "Normalised: noun, u-verb, ru-verb, irregular verb, i-adjective, na-adjective, adverb, particle, expression, counter. Empty string if unclear.",
        ),
      notes: z
        .string()
        .describe(
          "Short usage note if the page gives one (transitivity, politeness, what a counter counts). Empty string otherwise.",
        ),
      example: z
        .object({
          jp: z.string(),
          reading: z.string(),
          en: z.string(),
        })
        .nullable()
        .describe(
          "An example sentence ONLY if one is printed on the page for this word. Null otherwise — do not write your own.",
        ),
    }),
  ),
});

const SYSTEM_PROMPT = `You transcribe vocabulary lists from Japanese textbook pages into structured data.

Rules:
- Transcribe every vocabulary entry visible in the image(s), in the order they appear on the page.
- Transcribe only what is printed. Never invent entries, and never pad the list to a round number.
- If several images are given, they are consecutive pages of one list. Return a single combined list and do not repeat an entry that spans a page break.
- "term" is the headword exactly as printed. If the page prints both a kanji form and a kana form for the same word, use the kanji form as the term and the kana as the reading.
- "reading" is always the reading of the ENTIRE word in kana, even when furigana is only printed over the kanji portion. 食べる is たべる, not た.
- If the page has no English column (a monolingual textbook), supply the standard English meaning yourself. This is the one place you add information.
- Ignore page furniture: headers, page numbers, exercise instructions, grammar explanations, and illustrations.
- If an entry is cut off at the edge of the image or too blurry to read with confidence, omit it rather than guessing.`;

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      {
        error:
          "No ANTHROPIC_API_KEY found. Copy .env.example to .env.local, add your key from console.anthropic.com, and restart the dev server.",
      },
      { status: 503 },
    );
  }

  let body: z.infer<typeof RequestSchema>;
  try {
    body = RequestSchema.parse(await request.json());
  } catch {
    return NextResponse.json(
      { error: "Send 1–8 images as { media_type, data } with base64 data." },
      { status: 400 },
    );
  }

  const client = new Anthropic();

  try {
    const response = await client.messages.parse({
      model: "claude-opus-5",
      max_tokens: 16000,
      thinking: { type: "adaptive" },
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            ...body.images.map((image) => ({
              type: "image" as const,
              source: {
                type: "base64" as const,
                media_type: image.media_type,
                data: image.data,
              },
            })),
            {
              type: "text" as const,
              text:
                body.images.length > 1
                  ? `These ${body.images.length} images are consecutive pages of one vocabulary list. Transcribe every entry into a single combined list.`
                  : "Transcribe every vocabulary entry on this page.",
            },
          ],
        },
      ],
      output_config: { format: zodOutputFormat(ExtractionSchema) },
    });

    if (response.stop_reason === "refusal") {
      return NextResponse.json(
        { error: "Claude declined to process this image. Try a different photo." },
        { status: 422 },
      );
    }

    const parsed = response.parsed_output;
    if (!parsed) {
      return NextResponse.json(
        {
          error:
            response.stop_reason === "max_tokens"
              ? "That page held more vocabulary than fits in one pass. Try splitting it into two photos."
              : "Could not read a vocabulary list from that image.",
        },
        { status: 422 },
      );
    }

    return NextResponse.json({
      setName: parsed.set_name,
      items: parsed.items.map((item) => ({
        term: item.term,
        // Kana-only words sometimes come back with an empty reading; the term
        // already is the reading in that case.
        reading: item.reading || item.term,
        meaning: item.meaning,
        partOfSpeech: item.part_of_speech || undefined,
        notes: item.notes || undefined,
        example: item.example ?? undefined,
      })),
      usage: {
        inputTokens: response.usage.input_tokens,
        outputTokens: response.usage.output_tokens,
      },
    });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return NextResponse.json(
        { error: "Your ANTHROPIC_API_KEY was rejected. Check the key in .env.local." },
        { status: 401 },
      );
    }
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        { error: "Rate limited by the API. Wait a moment and try again." },
        { status: 429 },
      );
    }
    if (error instanceof Anthropic.APIConnectionError) {
      return NextResponse.json(
        { error: "Could not reach the Claude API. Check your connection." },
        { status: 502 },
      );
    }
    console.error("Extraction failed", error);
    return NextResponse.json(
      { error: "Extraction failed. See the server log for details." },
      { status: 500 },
    );
  }
}
