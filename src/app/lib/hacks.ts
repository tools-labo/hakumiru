import hacksData from "@/app/lib/hacks.json";
import { Hack } from "@/app/lib/types";

function sortByNewest(a: Hack, b: Hack) {
  return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
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
