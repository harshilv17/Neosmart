import { ESSAYS } from "./journal.data";

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

export function getSlugs(): string[] {
  return ESSAYS.map((e) => e.slug);
}

/** All essays, ordered for the reading list (by `order`, ascending). */
export function getAllEssays(): Essay[] {
  return [...ESSAYS].sort((a, b) => a.order - b.order);
}

export function getEssay(slug: string): Essay | null {
  return ESSAYS.find((e) => e.slug === slug) ?? null;
}
