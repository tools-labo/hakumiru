import type { MetadataRoute } from "next";
import { getPublishedHacks } from "@/app/lib/hacks";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hakumiru.com";
  const publishedHacks = getPublishedHacks();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/hacks`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const hackPages: MetadataRoute.Sitemap = publishedHacks.map((hack) => ({
    url: `${baseUrl}/hacks/${hack.id}`,
    lastModified: new Date(hack.updated_at),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...hackPages];
}
