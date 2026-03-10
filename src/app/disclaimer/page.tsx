import { Header } from "@/components/Header";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Header />

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-black mb-8">免責事項</h1>

          <div className="space-y-8 text-sm md:text-[15px] leading-8 text-slate-700">
            <section>
              <h2 className="text-lg font-black mb-3">1. 情報の正確性について</h2>
              <p>
                当サイトでは、できる限り正確な情報を掲載するよう努めていますが、その正確性、完全性、
                最新性を保証するものではありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">2. 利用によって生じた損害について</h2>
              <p>
                当サイトの掲載内容を利用したことによって生じたいかなる損害についても、当サイトは責任を負いません。
                各種ツール、サービス、プラン、機能の利用判断は、ご自身の責任で行ってください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">3. 外部リンク・外部サービスについて</h2>
              <p>
                当サイトからリンクやバナーなどによって外部サイトへ移動した場合、移動先サイトで提供される情報、
                サービス等について当サイトは責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">4. 内容の変更について</h2>
              <p>
                当サイトに掲載している内容は、予告なく変更・修正・削除する場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">5. AI出力の取り扱いについて</h2>
              <p>
                当サイトで紹介するハックやプロンプトは、利用環境、入力内容、利用時点のモデル仕様によって結果が変わる場合があります。
                出力内容はそのまま鵜呑みにせず、必要に応じて人の確認を行ってください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">6. 制定日</h2>
              <p>制定日: 2026-03-10</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
