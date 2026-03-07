
"use client";

import Link from "next/link";
import { BrainCircuit, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:scale-105 transition-transform">
            <BrainCircuit className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-headline font-black tracking-tight text-primary">
            AI HACK DB
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/hacks" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
            全てのハック
          </Link>
          <Link href="/hacks?category=仕事効率化" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
            仕事効率化
          </Link>
          <Link href="/hacks?category=文章作成" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
            文章作成
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/hacks">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
