import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const JOURNAL_DIR = path.join(process.cwd(), "content", "journal");

export type EssayMeta = {
  slug: string;
  title: string;
  date: string;
  order: number;
  author: string;
  dek: string;
  description: string;
  ogTitle: string;
};

export type Essay = EssayMeta & { body: string };

function parse(slug: string): Essay {
  const raw = fs.readFileSync(path.join(JOURNAL_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    order: Number(data.order ?? 0),
    author: String(data.author ?? "Neosmart"),
    dek: String(data.dek ?? ""),
    description: String(data.description ?? data.dek ?? ""),
    ogTitle: String(data.ogTitle ?? data.title ?? slug),
    body: content,
  };
}

export function getSlugs(): string[] {
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** All essays, ordered for the reading list (by `order`, ascending). */
export function getAllEssays(): Essay[] {
  return getSlugs()
    .map(parse)
    .sort((a, b) => a.order - b.order);
}

export function getEssay(slug: string): Essay | null {
  try {
    return parse(slug);
  } catch {
    return null;
  }
}
