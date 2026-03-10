import type { Metadata } from "next";
import { HacksListClient } from "./HacksListClient";

export const metadata: Metadata = {
  title: "AIハック一覧",
  description:
    "仕事効率化、文章作成、副業・発信など、用途別にAI活用ハックを探せる一覧ページです。公開済みのハックだけを絞り込んで探せます。",
  openGraph: {
    title: "AIハック一覧 | ハクミル",
    description:
      "仕事効率化、文章作成、副業・発信など、用途別にAI活用ハックを探せる一覧ページです。",
    url: "/hacks",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIハック一覧 | ハクミル",
    description:
      "仕事効率化、文章作成、副業・発信など、用途別にAI活用ハックを探せる一覧ページです。",
  },
};

export default function HacksPage() {
  return <HacksListClient />;
}
