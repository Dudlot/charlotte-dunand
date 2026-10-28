import { MetadataRoute } from "next";
import { getArticles } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles: MetadataRoute.Sitemap = getArticles().map(({ slug, frontmatter }) => ({
    url: `https://charlotte-dunand.com/journal/${slug}`,
    lastModified: new Date(frontmatter.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://charlotte-dunand.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://charlotte-dunand.com/fondations-digitales",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://charlotte-dunand.com/ingenierie-automatisation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://charlotte-dunand.com/suivi-evolution",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://charlotte-dunand.com/vision",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://charlotte-dunand.com/agences",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://charlotte-dunand.com/journal",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles,
    {
      url: "https://charlotte-dunand.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://charlotte-dunand.com/reserver-appel",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://charlotte-dunand.com/shop/audit-digital",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://charlotte-dunand.com/legales/mentions-politiques",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://charlotte-dunand.com/legales/cgv",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}