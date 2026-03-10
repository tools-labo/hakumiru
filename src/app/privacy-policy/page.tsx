import { Header } from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Header />

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-black mb-8">プライバシーポリシー</h1>

          <div className="space-y-8 text-sm md:text-[15px] leading-8 text-slate-700">
            <section>
              <h2 className="text-lg font-black mb-3">1. 基本方針</h2>
              <p>
                ハクミル（以下、「当サイト」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。
                当サイトでは、サービス改善や利用状況の把握のために、アクセス情報を取得する場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">2. 取得する情報</h2>
              <p>
                当サイトでは、アクセス解析やサイト改善のため、閲覧ページ、参照元、利用端末、ブラウザ情報などの
                利用情報を取得する場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">3. 利用目的</h2>
              <p>
                取得した情報は、サイト改善、コンテンツ改善、利用状況の分析、不正利用防止のために使用します。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">4. アクセス解析について</h2>
              <p>
                当サイトでは、アクセス解析ツールを利用する場合があります。これにより、トラフィックデータが
                自動的に収集されることがありますが、通常これには個人を特定する情報は含まれません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">5. 外部サービスについて</h2>
              <p>
                当サイトでは、外部サービスや外部リンクを利用する場合があります。リンク先サイトで提供される情報、
                サービス等については、各運営者の方針をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">6. 本ポリシーの変更</h2>
              <p>
                本ポリシーは、必要に応じて変更することがあります。変更後の内容は当ページに掲載した時点で効力を持つものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">7. 制定日</h2>
              <p>制定日: 2026-03-10</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
