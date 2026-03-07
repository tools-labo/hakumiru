
"use client";

import Link from "next/link";
import { Hack, difficultyLabels } from "@/app/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tag, BarChart2 } from "lucide-react";

interface HackCardProps {
  hack: Hack;
}

export function HackCard({ hack }: HackCardProps) {
  const difficultyStyles = {
    beginner: "bg-green-50 text-green-700 border-green-100",
    intermediate: "bg-blue-50 text-blue-700 border-blue-100",
    advanced: "bg-purple-50 text-purple-700 border-purple-100",
  }[hack.difficulty];

  return (
    <Link href={`/hacks/${hack.id}`}>
      <Card className="group overflow-hidden hover:ring-2 hover:ring-primary/20 transition-all duration-200 border bg-white h-full flex flex-col">
        <CardHeader className="p-5 pb-2">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-[10px] font-bold text-primary border-primary/20 bg-primary/5">
              {hack.category}
            </Badge>
            <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-bold ${difficultyStyles}`}>
              <BarChart2 className="w-3 h-3" />
              {difficultyLabels[hack.difficulty]}
            </div>
          </div>
          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {hack.title}
          </h3>
        </CardHeader>
        <CardContent className="p-5 pt-2 flex-grow flex flex-col gap-4">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {hack.summary}
          </p>
          
          <div className="mt-auto pt-4 border-t flex flex-wrap gap-1.5">
            {hack.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded flex items-center gap-1">
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
