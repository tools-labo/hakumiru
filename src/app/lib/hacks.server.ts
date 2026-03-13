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

function sortByNewest(a: { created_at: string }, b: { created_at: string }) {
  return b.created_at.localeCompare(a.created_at);
}

function countSharedTags(base: HackIndexItem, target: HackIndexItem) {
  const baseTags = new Set(base.tags);
  return target.tags.filter((tag) => baseTags.has(tag)).length;
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

  const others = index.filter((item) => item.id !== id);

  const sameCategory = others
    .filter((item) => item.category === current.category)
    .sort((a, b) => {
      const sharedDiff = countSharedTags(current, b) - countSharedTags(current, a);
      if (sharedDiff !== 0) return sharedDiff;
      return sortByNewest(a, b);
    });

  const pickedIds = new Set<string>();
  const result: HackIndexItem[] = [];

  for (const item of sameCategory) {
    if (result.length >= limit) break;
    result.push(item);
    pickedIds.add(item.id);
  }

  if (result.length < limit) {
    const fallback = others
      .filter((item) => !pickedIds.has(item.id))
      .sort(sortByNewest);

    for (const item of fallback) {
      if (result.length >= limit) break;
      result.push(item);
      pickedIds.add(item.id);
    }
  }

  return result;
}
