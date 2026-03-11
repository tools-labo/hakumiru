import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hakumiru.tools-labo.com"),
  title: {
    default: "ハクミル | AI活用ハック",
    template: "%s | ハクミル",
  },
  description:
    "ハクミルは、ChatGPTなどのAIを実務や発信に活かすための実用ハックをまとめたサイトです。プロンプト、ワークフロー、再利用しやすい運用例を探せます。",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ハクミル",
  },
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
        url: "/ogp.PNG",
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
    images: ["/ogp.PNG"],
  },
  icons: {
    icon: "/apple-icon.PNG",
    apple: "/apple-icon.PNG",
    shortcut: "/apple-icon.PNG",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B3CC4",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4902437373882717"
          crossOrigin="anonymous"
        ></script>
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
