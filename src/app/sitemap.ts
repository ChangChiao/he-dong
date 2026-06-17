import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hedong888.com";
  const lastContentUpdate = new Date("2026-06-13");

  return [
    {
      url: baseUrl,
      lastModified: lastContentUpdate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastContentUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastContentUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
