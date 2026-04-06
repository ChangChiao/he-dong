import type { MetadataRoute } from "next";
import { portfolioItems } from "@/constants/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hedong888.com";

  const portfolioPages: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...portfolioPages,
  ];
}
