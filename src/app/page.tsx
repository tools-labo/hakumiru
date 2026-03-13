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
import { getFeaturedHackIndex } from "@/app/lib/hacks.server";

export default function Home() {
  const featuredHacks = getFeaturedHackIndex(6);

  const useCaseList = [
    {
      key: "write_blog_note",
      name: "ブログやnoteを書く",
      sub: "見出し・導入文・下書き",
      icon: <PenSquare className="w-5 h-5" />,
    },
    {
      key: "make_money",
      name: "AIで稼ぎたい",
      sub: "比較記事・販売文・提案文",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      key: "research_compare",
      name: "調べて比較する",
      sub: "比較表・違い整理・要点抽出",
      icon: <FolderSearch className="w-5 h-5" />,
    },
    {
      key: "organize_info",
      name: "メモや情報を整理する",
      sub: "要約・箇条書き・分類整理",
      icon: <NotebookPen className="w-5 h-5" />,
    },
    {
      key: "social_publish",
      name: "SNSや発信に使う",
      sub: "投稿案・言い換え・再利用",
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      key: "creative",
      name: "クリエイティブに使う",
      sub: "画像・動画・表現アイデア",
      icon: <Palette className="w-5 h-5" />,
    },
  ];

  const categoriesList = [
    { name: "仕事効率化", icon: <Rocket className="w-4 h-4" /> },
    { name: "文章作成", icon: <FileText className="w-4 h-4" /> },
    { name: "画像作成", icon: <Sparkles className="w-4 h-4" /> },
    { name: "動画作成", icon: <Video className="w-4 h-4" /> },
    { name: "副業・発信", icon: <TrendingUp className="w-4 h-4" /> },
    { name: "プログラミング・開発", icon: <BrainCircuit className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-12">
      <Header />

      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <p className="text-sm md:text-base font-bold tracking-[0.2em] text-primary uppercase">
                ハクミル｜AI活用ハック
              </p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                AIの使い方が<span className="text-primary">みつかる</span>ハック集。
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                何を入力して、どう使い、何ができるか。
                <br className="hidden md:block" />
                プロンプトと手順つきで、ChatGPTなどのAIの使い方を探せるサイトです。
              </p>
            </div>

            <div className="max-w-xl mx-auto pt-1">
              <Button
                size="lg"
                className="h-14 px-10 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/hacks" scroll className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  ハックを探す
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-black uppercase tracking-wider text-muted-foreground">
            やりたいことから探す
          </h2>
          <Link
            href="/hacks"
            scroll
            className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            一覧を見る <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {useCaseList.map((item) => (
            <Link
              key={item.key}
              href={`/hacks?use_case=${item.key}`}
              scroll
            >
              <div className="bg-white p-5 md:p-6 rounded-2xl border hover:border-primary/50 transition-all group hover:shadow-sm h-full flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm leading-snug mb-2">{item.name}</h3>
                <p className="text-[11px] md:text-xs leading-relaxed text-muted-foreground">
                  {item.sub}
                </p>
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
            scroll
            className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            一覧を見る <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {featuredHacks.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredHacks.map((hack) => (
                <HackCard key={hack.id} hack={hack} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-12 border-2 font-bold"
                asChild
              >
                <Link href="/hacks" scroll>ハック一覧をもっと見る</Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl border p-10 text-center text-muted-foreground">
            公開中のハックはまだありません
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 py-2 max-w-6xl">
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-xl font-black uppercase tracking-wider text-muted-foreground">
            カテゴリー
          </h2>
          <Link
            href="/hacks"
            scroll
            className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
          >
            一覧を見る <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categoriesList.map((cat) => (
            <Link
              key={cat.name}
              href={`/hacks?category=${cat.name}`}
              scroll
            >
              <div className="bg-white px-3 py-4 rounded-2xl border hover:border-primary/50 transition-all group hover:shadow-sm h-full flex flex-col items-center text-center min-h-[108px]">
                <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center text-primary mb-2.5 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-[13px] leading-snug">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
