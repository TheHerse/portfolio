import type { MetadataRoute } from "next";

const siteUrl = "https://hersonhernandez.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-04");

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": siteUrl,
          "es-US": `${siteUrl}/es/`,
        },
      },
    },
    {
      url: `${siteUrl}/es/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-US": siteUrl,
          "es-US": `${siteUrl}/es/`,
        },
      },
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
