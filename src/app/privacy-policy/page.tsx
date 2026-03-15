import { Header } from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Header />

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-black mb-8">
            プライバシーポリシー
          </h1>

          <div className="space-y-8 text-sm md:text-[15px] leading-8 text-slate-700">
            <section>
              <h2 className="text-lg font-black mb-3">1. 基本方針</h2>
              <p>
                ハクミル（以下、「当サイト」）は、利用者のプライバシーを尊重し、
                個人情報および利用情報の適切な取り扱いに努めます。
                当サイトは、コンテンツの改善、利用状況の把握、広告配信、
                不正利用の防止等のため、必要な範囲で情報を取得・利用する場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">2. 取得する情報</h2>
              <p>
                当サイトでは、以下の情報を取得する場合があります。
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>閲覧したページ、アクセス日時、参照元URL等の利用状況</li>
                <li>IPアドレス、ブラウザの種類、OS、端末情報等の技術情報</li>
                <li>Cookie、ウェブビーコン、その他の識別子により取得される情報</li>
                <li>お問い合わせ等で利用者が任意に送信した情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">3. 利用目的</h2>
              <p>
                取得した情報は、主に以下の目的で利用します。
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>当サイトの表示改善、機能改善、コンテンツ改善のため</li>
                <li>アクセス状況や利用傾向の分析のため</li>
                <li>広告配信、広告効果測定、不正クリック対策のため</li>
                <li>不正利用の防止、障害対応、セキュリティ向上のため</li>
                <li>お問い合わせへの対応のため</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">4. 広告配信について</h2>
              <p>
                当サイトは、第三者配信の広告サービス（Google AdSense など）を利用し、
                広告を表示する場合があります。
                その際、広告配信事業者は、利用者の興味に応じた広告を表示するために、
                Cookie、ウェブビーコン、IPアドレス、その他の識別子を使用して、
                当サイトや他サイトへのアクセス情報を取得・利用することがあります。
              </p>
              <p className="mt-3">
                また、第三者が利用者のブラウザにCookieを設定したり、
                既存のCookieを読み取ったりすることがあります。
                当サイトにおける広告配信に関連するGoogleのデータ利用については、
                Googleの案内ページをご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">5. Cookie等の使用について</h2>
              <p>
                当サイトでは、利便性向上、アクセス解析、広告配信のためにCookie等を利用する場合があります。
                利用者はブラウザ設定によりCookieを無効化できますが、
                その場合、当サイトの一部機能が正しく動作しないことがあります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">6. アクセス解析について</h2>
              <p>
                当サイトでは、アクセス解析ツールを利用する場合があります。
                これにより、トラフィックデータ、閲覧環境、参照元等の情報が自動的に収集されることがあります。
                これらの情報は、通常、単独で特定の個人を識別するものではありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">7. EEA・英国・スイスにおける同意取得について</h2>
              <p>
                当サイトは、欧州経済領域（EEA）、英国、スイスの利用者に対して、
                法令およびGoogleのポリシー上必要な場合、
                Cookieまたはその他のローカルストレージの使用、
                広告のパーソナライズ、広告測定、解析等に関する同意取得を行う場合があります。
              </p>
              <p className="mt-3">
                対象地域の利用者には、必要に応じて同意管理プラットフォーム（CMP）等を通じて
                選択の機会を提供します。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">8. 個人情報の第三者提供について</h2>
              <p>
                当サイトは、法令に基づく場合を除き、
                利用者本人の同意なく個人情報を第三者へ提供しません。
                ただし、広告配信、アクセス解析、サイト運営に必要な範囲で、
                外部サービス提供事業者に利用情報が送信される場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">9. 外部リンクについて</h2>
              <p>
                当サイトには外部サイトへのリンクが含まれる場合があります。
                移動先サイトにおける個人情報の取り扱い、Cookieの利用、
                サービス内容等については、各サイトの方針をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">10. 免責</h2>
              <p>
                当サイトに掲載する情報については、できる限り正確な内容を提供するよう努めますが、
                正確性、完全性、最新性を保証するものではありません。
                また、広告配信事業者や外部サービスの仕様変更により、
                本ポリシーの記載内容と運用が一部異なる場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">11. 本ポリシーの変更</h2>
              <p>
                本ポリシーは、法令、サービス内容、広告配信仕様等の変更に応じて改定することがあります。
                変更後の内容は、当ページに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black mb-3">12. 制定日・改定日</h2>
              <p>制定日: 2026-03-10</p>
              <p>最終改定日: 2026-03-16</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
