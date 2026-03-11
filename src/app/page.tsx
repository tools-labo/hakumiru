import Link from "next/link";
import { Header } from "@/components/Header";
import { HackCard } from "@/components/HackCard";
import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  Rocket,
  Sparkles,
  TrendingUp,
  ChevronRight,
  Search,
  FileText,
  Video,
  PenSquare,
  Wallet,
  FolderSearch,
  NotebookPen,
  Megaphone,
  Palette,
} from "lucide-react";
import { getPublishedHacks } from "@/app/lib/hacks";

export default function Home() {
  const featuredHacks = getPublishedHacks().slice(0, 6);

  const useCaseList = [
    {
      key: "write_blog_note",
      name: "ブログやnoteを書く",
      icon: <PenSquare className="w-5 h-5" />,
    },
    {
      key: "make_money",
      name: "AIで稼ぎたい",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      key: "research_compare",
      name: "調べて比較する",
      icon: <FolderSearch className="w-5 h-5" />,
    },
    {
      key: "organize_info",
      name: "メモや情報を整理する",
      icon: <NotebookPen className="w-5 h-5" />,
    },
    {
      key: "social_publish",
      name: "SNSや発信に使う",
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      key: "creative",
      name: "クリエイティブに使う",
      icon: <Palette className="w-5 h-5" />,
    },
  ];

  const categoriesList = [
    { name: "仕事効率化", icon: <Rocket className="w-5 h-5" /> },
    { name: "文章作成", icon: <FileText className="w-5 h-5" /> },
    { name: "画像作成", icon: <Sparkles className="w-5 h-5" /> },
    { name: "動画作成", icon: <Video className="w-5 h-5" /> },
    { name: "副業・発信", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "プログラミング・開発", icon: <BrainCircuit className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Header />

      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base font-bold tracking-[0.2em] text-primary uppercase">
                ハクミル｜AI活用ハック
              </p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                AIを、<span className="text-primary">もっと賢く</span>使いこなす。
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                プロンプト、ワークフロー、自動化テクニック。<br className="hidden md:block" />
                実用的なAI活用ハックを探せるサイト。
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <Button
                size="lg"
                className="h-14 px-10 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/hacks" className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  ハックを探す
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-black uppercase tracking-wider text-muted-foreground">
            やりたいことから探す
          </h2>
          <Link
            href="/hacks"
            className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            一覧を見る <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {useCaseList.map((item) => (
            <Link key={item.key} href={`/hacks?use_case=${item.key}`}>
              <div className="bg-white p-6 rounded-2xl border hover:border-primary/50 transition-all group hover:shadow-sm h-full flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm leading-snug">{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-black uppercase tracking-wider text-muted-foreground">
            カテゴリー
          </h2>
          <Link
            href="/hacks"
            className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            全て見る <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoriesList.map((cat) => (
            <Link key={cat.name} href={`/hacks?category=${cat.name}`}>
              <div className="bg-white p-6 rounded-2xl border hover:border-primary/50 transition-all group hover:shadow-sm h-full flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-sm mb-1 leading-snug">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-black uppercase tracking-wider text-muted-foreground">
            最新のハック
          </h2>
          <Link
            href="/hacks"
            className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            全てのハックを表示 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {featuredHacks.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredHacks.map((hack) => (
                <HackCard key={hack.id} hack={hack} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12 border-2 font-bold"
                asChild
              >
                <Link href="/hacks">ハック一覧をもっと見る</Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl border p-10 text-center text-muted-foreground">
            公開中のハックはまだありません
          </div>
        )}
      </section>
    </div>
  );
}
