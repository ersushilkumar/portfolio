import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { articles } from "@/data/articles";
import { ventures } from "@/data/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticRoutes = [
    "",
    "/about",
    "/ventures",
    "/projects",
    "/finance-and-research",
    "/research-publishing",
    "/research-publishing/repository",
    "/research-publishing/journals",
    "/research-publishing/services",
    "/writing",
    "/resume",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2025-01-01T00:00:00.000Z"),
    changeFrequency: route === "" || route.startsWith("/research-publishing") ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/ventures") || route.startsWith("/research-publishing") ? 0.9 : 0.7,
  }));

  const ventureRoutes = ventures.map((v) => ({
    url: `${baseUrl}/ventures/${v.slug}`,
    lastModified: new Date("2025-01-01T00:00:00.000Z"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${baseUrl}/writing/${a.slug}`,
    lastModified: new Date("2025-01-01T00:00:00.000Z"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...ventureRoutes, ...articleRoutes];
}
