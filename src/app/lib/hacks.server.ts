import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { Hack } from "@/app/lib/types";
import type { HackIndexItem } from "@/app/lib/hack-index";

const recordsDir = path.join(process.cwd(), "src", "data", "hacks", "records");
const generatedDir = path.join(process.cwd(), "src", "data", "hacks", "generated");

function readJsonFile<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

export function getPublishedHackIndex(): HackIndexItem[] {
  return readJsonFile<HackIndexItem[]>(
    path.join(generatedDir, "hacks-index.json")
  );
}

export function getFeaturedHackIndex(limit = 6): HackIndexItem[] {
  return getPublishedHackIndex().slice(0, limit);
}

export function getPublishedHackById(id: string): Hack | null {
  const filePath = path.join(recordsDir, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;

  const hack = readJsonFile<Hack>(filePath);
  if (hack.status !== "published") return null;

  return hack;
}

export function getPublishedHacks(): Hack[] {
  const index = getPublishedHackIndex();
  return index
    .map((item) => getPublishedHackById(item.id))
    .filter((hack): hack is Hack => Boolean(hack));
}

export function getRelatedHackIndex(id: string, limit = 3): HackIndexItem[] {
  const index = getPublishedHackIndex();
  const current = index.find((item) => item.id === id);
  if (!current) return [];

  const scored = index
    .filter((item) => item.id !== id)
    .map((item) => {
      let score = 0;

      if (item.category === current.category) score += 2;
      if (item.primary_use_case === current.primary_use_case) score += 2;

      const sharedTags = item.tags.filter((tag) => current.tags.includes(tag)).length;
      score += sharedTags * 3;

      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.item.created_at.localeCompare(a.item.created_at);
    })
    .slice(0, limit)
    .map((entry) => entry.item);

  return scored;
}
