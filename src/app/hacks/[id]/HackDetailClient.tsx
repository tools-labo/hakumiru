"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HackCard } from "@/components/HackCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  Copy,
  Check,
  AlertTriangle,
  Wrench,
  CheckCircle2,
  Calendar,
  Layout,
  BarChart2,
} from "lucide-react";
import { difficultyLabels, planRequirementLabels } from "@/app/lib/types";
import { getPublishedHackById, getRelatedHacks } from "@/app/lib/hacks";

export function HackDetailClient({ id }: { id: string }) {
  const hack = getPublishedHackById(id);
  const relatedHacks = getRelatedHacks(id, 3);
  const [copied, setCopied] = useState(false);

  if (!hack) {
    return null;
  }

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(hack.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const difficultyStyles = {
    beginner: "bg-green-50 text-green-700 border-green-100",
    intermediate: "bg-blue-50 text-blue-700 border-blue-100",
    advanced: "bg-purple-50 text-purple-700 border-purple-100",
  }[hack.difficulty];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Header />

      <main className="container mx-auto px-4 py-6 md:py-10 max-w-4xl">
        <div className="space-y-6">
          <Link
            href="/hacks"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-2"
          >
            <ChevronLeft className="w-4 h-4" /> データベースに戻る
          </Link>

          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="secondary" className="font-bold px-3 py-1 bg-primary/5 text-primary border-primary/10">
                  {hack.category}
                </Badge>
                <div className={`px-3 py-1 rounded-full border text-[11px] font-bold flex items-center gap-1.5 ${difficultyStyles}`}>
                  <BarChart2 className="w-3 h-3" />
                  {difficultyLabels[hack.difficulty]}
                </div>
                <Badge variant="outline" className="font-bold px-3 py-1 text-[11px]">
                  {planRequirementLabels[hack.plan_requirement]}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4 text-slate-900">
                {hack.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {hack.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-b">
              <div className="p-6 md:p-8 bg-slate-50/30 border-b md:border-b-0 md:border-r">
                <div className="flex items-center gap-2 text-slate-500 font-black text-[10px] uppercase tracking-widest mb-4">
                  <AlertTriangle className="w-3.5 h-3.5" /> 解決したい課題
                </div>
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {hack.problem_points.map((point, i) => (
                      <li key={i} className="text-sm font-bold text-slate-800 flex gap-2.5 leading-relaxed">
                        <span className="text-slate-300 mt-0.5">•</span> {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[13px] text-muted-foreground/80 leading-relaxed pt-2 border-t border-slate-200/50">
                    {hack.problem}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-green-50/20">
                <div className="flex items-center gap-2 text-green-600 font-black text-[10px] uppercase tracking-widest mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 期待される効果
                </div>
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {hack.result_points.map((point, i) => (
                      <li key={i} className="text-sm font-bold text-slate-800 flex gap-2.5 leading-relaxed">
                        <span className="text-green-400 mt-0.5">•</span> {point}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[13px] text-muted-foreground/80 leading-relaxed pt-2 border-t border-green-200/30">
                    {hack.result}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-10">
              <section>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">
                  対象ツール
                </h3>
                <div className="flex flex-wrap gap-2">
                  {hack.tools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-2 bg-slate-100/50 px-3 py-1.5 rounded-lg border text-sm font-bold text-slate-700"
                    >
                      <Wrench className="w-3.5 h-3.5 text-slate-400" />
                      {tool}
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    プロンプト
                  </h3>
                  <Button
                    onClick={handleCopyPrompt}
                    variant="outline"
                    className="gap-2 font-bold h-8 px-3 text-xs border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
                    size="sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? "コピー完了" : "コピーする"}
                  </Button>
                </div>
                <div className="bg-slate-900 rounded-xl p-5 md:p-6 text-slate-100 font-mono text-sm leading-relaxed whitespace-pre-wrap shadow-inner border border-slate-800">
                  {hack.prompt}
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  実践手順
                </h3>
                <div className="space-y-3">
                  {hack.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 border rounded-xl">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-md flex items-center justify-center font-black text-xs">
                        {index + 1}
                      </div>
                      <div className="text-sm font-medium leading-relaxed text-slate-700">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {hack.optional_output_example && (
                <section className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    出力サンプル
                  </h3>
                  <div className="bg-amber-50/30 border border-amber-100 rounded-xl p-5 md:p-6 text-sm italic text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {hack.optional_output_example}
                  </div>
                </section>
              )}

              <section className="bg-rose-50/50 rounded-xl p-5 border border-rose-100">
                <h3 className="text-[10px] font-black text-rose-600 mb-3 flex items-center gap-2 uppercase tracking-widest">
                  <AlertTriangle className="w-3.5 h-3.5" /> 注意点
                </h3>
                <div className="text-[13px] text-rose-900/70 leading-relaxed whitespace-pre-wrap">
                  {hack.caution}
                </div>
              </section>

              <div className="pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {hack.tags.map((tag) => (
                    <Link key={tag} href={`/hacks?search=${tag}`}>
                      <Badge
                        variant="outline"
                        className="hover:bg-primary/5 transition-colors cursor-pointer px-3 py-1 font-medium text-[11px] text-muted-foreground"
                      >
                        # {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {relatedHacks.length > 0 && (
                <section className="pt-6 border-t space-y-4">
                  <h2 className="text-lg font-black">関連ハック</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedHacks.map((relatedHack) => (
                      <HackCard key={relatedHack.id} hack={relatedHack} />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground font-medium py-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {hack.created_at}
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1">
              <Layout className="w-3 h-3" /> ID: {hack.id}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
