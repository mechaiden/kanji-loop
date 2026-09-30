"use client";

/**
 * Claude downsamples images whose long edge exceeds ~1568px, so sending
 * anything larger just costs upload time. We re-encode to JPEG at that size:
 * a 12MP phone photo drops from ~5MB to ~250KB with no loss of legibility for
 * printed text.
 */
const MAX_EDGE = 1568;
const JPEG_QUALITY = 0.85;

export type PreparedImage = {
  media_type: "image/jpeg";
  data: string;
  /** Object URL for the preview thumbnail; revoke when done. */
  previewUrl: string;
  name: string;
};

export async function prepareImage(file: File): Promise<PreparedImage> {
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new Error(
      `Couldn't read "${file.name}". Browsers can't decode HEIC — export it as JPEG or PNG first.`,
    );
  }

  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Your browser blocked canvas rendering.");

  // White underlay: textbook scans are often transparent PNGs, and JPEG has no
  // alpha channel, so without this the page would come out black.
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const dataUrl = canvas.toDataURL("image/jpeg", JPEG_QUALITY);

  return {
    media_type: "image/jpeg",
    data: dataUrl.slice(dataUrl.indexOf(",") + 1),
    previewUrl: dataUrl,
    name: file.name,
  };
}
