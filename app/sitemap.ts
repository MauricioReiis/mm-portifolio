import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-07-28"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}/mauricio-reis.jpg`],
    },
  ];
}
