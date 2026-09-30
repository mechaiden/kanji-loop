import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

// Loaded for the Japanese glyphs; the "latin" subset is all next/font will
// prefetch, with the CJK ranges pulled in on demand.
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kanjiloop",
  description: "Turn a photo of your Japanese textbook into unlimited practice.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-border">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4">
            <Link
              href="/"
              className="focus-ring rounded text-[15px] font-semibold tracking-tight"
            >
              <span className="jp text-accent">環</span> Kanjiloop
            </Link>
            <Link
              href="/import"
              className="focus-ring rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              Import a page
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
