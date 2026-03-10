import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Header />

      <main className="container mx-auto px-4 py-20 max-w-3xl">
        <div className="bg-white rounded-3xl border p-10 md:p-14 text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4">ページが見つかりません</h1>
          <p className="text-muted-foreground mb-8">
            URLが変わったか、削除された可能性があります。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/">トップへ戻る</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/hacks">ハック一覧を見る</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
