import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hedong888.com";
  const lastContentUpdate = new Date("2026-04-09");

  return [
    {
      url: baseUrl,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
