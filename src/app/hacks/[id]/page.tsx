import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedHackById, getPublishedHacks } from "@/app/lib/hacks";
import { HackDetailClient } from "./HackDetailClient";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getPublishedHacks().map((hack) => ({
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

  return <HackDetailClient id={id} />;
}
