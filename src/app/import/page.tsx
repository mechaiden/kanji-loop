"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

import { prepareImage, type PreparedImage } from "@/lib/image";
import { createSet, newId } from "@/lib/storage";
import type { VocabItem } from "@/lib/types";

type Stage = "pick" | "reading" | "review";

type DraftItem = VocabItem;

export default function ImportPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [stage, setStage] = useState<Stage>("pick");
  const [images, setImages] = useState<PreparedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const [setName, setSetName] = useState("");
  const [items, setItems] = useState<DraftItem[]>([]);

  const addFiles = useCallback(async (files: FileList | File[]) => {
    setError(null);
    const picked = [...files].filter((file) => file.type.startsWith("image/"));
    if (!picked.length) {
      setError("Those don't look like image files.");
      return;
    }
    try {
      const prepared = await Promise.all(picked.map(prepareImage));
      setImages((current) => [...current, ...prepared].slice(0, 8));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Couldn't read that image.");
    }
  }, []);

  async function extract() {
    setStage("reading");
    setError(null);
    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          images: images.map(({ media_type, data }) => ({ media_type, data })),
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "Extraction failed.");

      setSetName(payload.setName ?? "");
      setItems(
        (payload.items as Omit<VocabItem, "id">[]).map((item) => ({
          ...item,
          id: newId(),
        })),
      );
      setStage("review");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Extraction failed.");
      setStage("pick");
    }
  }

  function updateItem(id: string, patch: Partial<DraftItem>) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  }

  function save() {
    const cleaned = items.filter(
      (item) => item.term.trim() && item.meaning.trim(),
    );
    if (!cleaned.length) {
      setError("Keep at least one word with both a term and a meaning.");
      return;
    }
    try {
      const set = createSet(setName, cleaned);
      router.push(`/sets/${set.id}`);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Couldn't save the set.");
    }
  }

  if (stage === "reading") {
    return (
      <div className="py-24 text-center">
        <div className="jp mb-6 animate-pulse text-4xl text-accent">読み込み中</div>
        <p className="font-medium">Reading your page…</p>
        <p className="mt-2 text-sm text-muted">
          Claude is transcribing the kanji, readings, and meanings. This usually
          takes 20–40 seconds.
        </p>
      </div>
    );
  }

  if (stage === "review") {
    return (
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Check the transcription
        </h1>
        <p className="mt-2 text-sm text-muted">
          {items.length} words found. Fix anything that came out wrong — a bad
          reading here becomes a wrong answer you have to unlearn later.
        </p>

        <label className="mt-6 block">
          <span className="text-sm text-muted">Set name</span>
          <input
            value={setName}
            onChange={(event) => setSetName(event.target.value)}
            placeholder="Genki Lesson 3"
            className="focus-ring mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2"
          />
        </label>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-3xl border-collapse text-sm">
            <thead>
              <tr className="bg-surface text-left text-muted">
                <th className="px-3 py-2 font-medium">Term</th>
                <th className="px-3 py-2 font-medium">Reading</th>
                <th className="px-3 py-2 font-medium">Meaning</th>
                <th className="px-3 py-2 font-medium">Part of speech</th>
                <th className="w-10 px-3 py-2" />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t border-border">
                  <td className="px-2 py-1">
                    <CellInput
                      japanese
                      value={item.term}
                      onChange={(term) => updateItem(item.id, { term })}
                      aria-label="Term"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <CellInput
                      japanese
                      value={item.reading}
                      onChange={(reading) => updateItem(item.id, { reading })}
                      aria-label="Reading"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <CellInput
                      value={item.meaning}
                      onChange={(meaning) => updateItem(item.id, { meaning })}
                      aria-label="Meaning"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <CellInput
                      value={item.partOfSpeech ?? ""}
                      onChange={(partOfSpeech) =>
                        updateItem(item.id, { partOfSpeech })
                      }
                      aria-label="Part of speech"
                    />
                  </td>
                  <td className="px-2 py-1">
                    <button
                      type="button"
                      aria-label={`Remove ${item.term}`}
                      onClick={() =>
                        setItems((current) =>
                          current.filter((other) => other.id !== item.id),
                        )
                      }
                      className="focus-ring rounded p-1 text-muted hover:text-wrong"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {error && <p className="mt-4 text-sm text-wrong">{error}</p>}

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={save}
            className="focus-ring rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
          >
            Save {items.length} words
          </button>
          <button
            type="button"
            onClick={() =>
              setItems((current) => [
                ...current,
                { id: newId(), term: "", reading: "", meaning: "" },
              ])
            }
            className="focus-ring rounded-xl border border-border px-4 py-3 text-sm text-muted hover:text-foreground"
          >
            Add a row
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight">Import a page</h1>
      <p className="mt-2 text-sm text-muted">
        Add up to 8 images of one vocabulary list. Straight-on, well-lit shots
        read best — and a flatter page beats a higher resolution.
      </p>

      <div
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          void addFiles(event.dataTransfer.files);
        }}
        onPaste={(event) => {
          if (event.clipboardData.files.length) {
            void addFiles(event.clipboardData.files);
          }
        }}
        className={`mt-6 rounded-2xl border-2 border-dashed p-10 text-center transition-colors ${
          dragging ? "border-accent bg-accent/5" : "border-border"
        }`}
      >
        <p className="text-muted">Drag images here, paste from the clipboard, or</p>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="focus-ring mt-3 rounded-xl border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-accent/50"
        >
          Choose files
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(event) => {
            if (event.target.files) void addFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </div>

      {images.length > 0 && (
        <ul className="mt-5 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <li key={`${image.name}-${index}`} className="group relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.previewUrl}
                alt={image.name}
                className="aspect-3/4 w-full rounded-lg border border-border object-cover"
              />
              <button
                type="button"
                aria-label={`Remove ${image.name}`}
                onClick={() =>
                  setImages((current) => current.filter((_, i) => i !== index))
                }
                className="focus-ring absolute top-1 right-1 rounded-md bg-background/85 px-1.5 py-0.5 text-xs"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-4 text-sm text-wrong">{error}</p>}

      <button
        type="button"
        disabled={!images.length}
        onClick={extract}
        className="focus-ring mt-6 w-full rounded-xl bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35"
      >
        Read {images.length || ""} {images.length === 1 ? "page" : "pages"}
      </button>
    </div>
  );
}

function CellInput({
  value,
  onChange,
  japanese = false,
  ...rest
}: {
  value: string;
  onChange: (value: string) => void;
  japanese?: boolean;
  // Our onChange hands back the string, not the event, so the native one goes.
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">) {
  return (
    <input
      {...rest}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`focus-ring w-full rounded bg-transparent px-2 py-1.5 hover:bg-surface ${
        japanese ? "jp text-base" : ""
      }`}
    />
  );
}
