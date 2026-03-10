import hacksData from "@/app/lib/hacks.json";
import { Hack } from "@/app/lib/types";

function sortByNewest(a: Hack, b: Hack) {
  return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
}

function countSharedTags(base: Hack, target: Hack) {
  const baseTags = new Set(base.tags);
  return target.tags.filter((tag) => baseTags.has(tag)).length;
}

export function getAllHacks(): Hack[] {
  return [...(hacksData as Hack[])];
}

export function getPublishedHacks(): Hack[] {
  return getAllHacks()
    .filter((hack) => hack.status === "published")
    .sort(sortByNewest);
}

export function getPublishedHackById(id: string): Hack | undefined {
  return getPublishedHacks().find((hack) => hack.id === id);
}

export function getRelatedHacks(id: string, limit = 3): Hack[] {
  const published = getPublishedHacks();
  const current = published.find((hack) => hack.id === id);

  if (!current) return [];

  const others = published.filter((hack) => hack.id !== id);

  const sameCategory = others
    .filter((hack) => hack.category === current.category)
    .sort((a, b) => {
      const sharedDiff = countSharedTags(current, b) - countSharedTags(current, a);
      if (sharedDiff !== 0) return sharedDiff;
      return sortByNewest(a, b);
    });

  const pickedIds = new Set<string>();
  const result: Hack[] = [];

  for (const hack of sameCategory) {
    if (result.length >= limit) break;
    result.push(hack);
    pickedIds.add(hack.id);
  }

  if (result.length < limit) {
    const fallback = others
      .filter((hack) => !pickedIds.has(hack.id))
      .sort(sortByNewest);

    for (const hack of fallback) {
      if (result.length >= limit) break;
      result.push(hack);
      pickedIds.add(hack.id);
    }
  }

  return result;
}
