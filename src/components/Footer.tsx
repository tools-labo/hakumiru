import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-primary leading-none">
                  ハクミル
                </div>
                <div className="text-xs font-bold text-muted-foreground tracking-wide">
                  AI活用ハック
                </div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              ハクミルは、ChatGPTなどのAIを実務や発信に活かすための実用ハックをまとめたサイトです。
              プロンプトの丸写しではなく、再利用しやすい運用として整理した内容を掲載します。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-sm font-black mb-3">サイト</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    トップ
                  </Link>
                </div>
                <div>
                  <Link href="/hacks" className="text-muted-foreground hover:text-primary transition-colors">
                    ハック一覧
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-black mb-3">運営情報</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <a
                    href="https://tools-labo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tools-LABOホーム
                  </a>
                </div>
                <div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfF73yZ69HH-FASKEYSkp98zM92o4dtQLtiQs7BzLRuwsobfA/viewform?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    お問い合わせ
                  </a>
                </div>
                <div>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    プライバシーポリシー
                  </Link>
                </div>
                <div>
                  <Link
                    href="/disclaimer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    免責事項
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} ハクミル
        </div>
      </div>
    </footer>
  );
}
