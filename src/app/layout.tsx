
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AIハック | AIを味方につけるテクニック集',
  description: 'AIハックは、プロンプトエンジニアリングや最新ツールの活用法など、AIを味方につけて生産性を爆上げするための知恵を共有するプラットフォームです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
