import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ハクミル",
    short_name: "ハクミル",
    description:
      "ChatGPTなどのAIを実務や発信に活かすための実用ハックをまとめたサイトです。",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F5FB",
    theme_color: "#5B3CC4",
    icons: [
  {
    src: "/icon.png",
    sizes: "192x192",
    type: "image/png",
  },
  {
    src: "/icon.png",
    sizes: "512x512",
    type: "image/png",
  },
],
  };
}
