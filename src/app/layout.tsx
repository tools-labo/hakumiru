import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hakumiru.com"),
  title: {
    default: "ハクミル | AI活用ハック",
    template: "%s | ハクミル",
  },
  description:
    "ハクミルは、ChatGPTなどのAIを実務や発信に活かすための実用ハックをまとめたサイトです。プロンプト、ワークフロー、再利用しやすい運用例を探せます。",
  openGraph: {
    title: "ハクミル | AI活用ハック",
    description:
      "ChatGPTなどのAIを実務や発信に活かすための実用ハックをまとめたサイトです。",
    url: "/",
    siteName: "ハクミル",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "ハクミル | AI活用ハック",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ハクミル | AI活用ハック",
    description:
      "ChatGPTなどのAIを実務や発信に活かすための実用ハックをまとめたサイトです。",
    images: ["/ogp.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-primary/20 selection:text-primary">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
