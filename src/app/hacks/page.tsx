
"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { HackCard } from "@/components/HackCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import hacksData from "@/app/lib/hacks.json";
import { Hack, categories } from "@/app/lib/types";

export default function HacksListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  const filteredHacks = useMemo(() => {
    return (hacksData as Hack[]).filter(hack => {
      const matchesSearch = hack.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            hack.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            hack.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || hack.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "all" || hack.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-headline font-black mb-2">AIハック一覧</h1>
          <p className="text-muted-foreground">条件に合うテクニックを見つけましょう</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">キーワード</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="タイトルやタグで検索" 
                  className="pl-10 h-11"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">カテゴリー</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="全てのカテゴリー" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全て</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">難易度</label>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="全ての難易度" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全て</SelectItem>
                  <SelectItem value="beginner">初級</SelectItem>
                  <SelectItem value="intermediate">中級</SelectItem>
                  <SelectItem value="advanced">上級</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 h-11">
              <Button 
                variant="outline" 
                className="flex-1 h-full md:flex-none md:w-auto font-bold gap-2"
                onClick={clearFilters}
              >
                <X className="w-4 h-4" /> クリア
              </Button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium">
            <span className="text-primary font-bold">{filteredHacks.length}</span> 件の結果が見つかりました
          </p>
        </div>

        {/* Grid */}
        {filteredHacks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredHacks.map((hack) => (
              <HackCard key={hack.id} hack={hack} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-dashed">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto text-muted-foreground">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">該当するハックがありません</h3>
            <p className="text-muted-foreground">検索条件を変更して再度お試しください</p>
            <Button variant="link" onClick={clearFilters} className="font-bold">
              フィルターを全てリセット
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
