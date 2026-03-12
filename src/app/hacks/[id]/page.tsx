import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPublishedHackById,
  getPublishedHackIndex,
  getRelatedHackIndex,
} from "@/app/lib/hacks.server";
import { HackDetailClient } from "./HackDetailClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getPublishedHackIndex().map((hack) => ({
    id: hack.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const hack = getPublishedHackById(id);

  if (!hack) {
    return {
      title: "ハックが見つかりません",
      description: "指定されたハックは非公開か、存在しません。",
    };
  }

  return {
    title: hack.title,
    description: hack.summary,
    openGraph: {
      title: `${hack.title} | ハクミル`,
      description: hack.summary,
      url: `/hacks/${hack.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${hack.title} | ハクミル`,
      description: hack.summary,
    },
  };
}

export default async function HackDetailPage({ params }: PageProps) {
  const { id } = await params;
  const hack = getPublishedHackById(id);

  if (!hack) {
    notFound();
  }

  const relatedHacks = getRelatedHackIndex(id, 3);

  return <HackDetailClient hack={hack} relatedHacks={relatedHacks} />;
}
