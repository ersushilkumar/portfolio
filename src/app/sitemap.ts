import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { articles } from "@/data/articles";
import { ventures } from "@/data/ventures";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

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
    changeFrequency:
      route === "" || route.startsWith("/research-publishing")
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/ventures") || route.startsWith("/research-publishing")
        ? 0.9
        : 0.7,
  }));

  const ventureRoutes = ventures.map((v) => ({
    url: `${baseUrl}/ventures/${v.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleRoutes = articles.map((a) => {
    const pubDate = new Date(a.publishedAt);
    const isValidDate = !isNaN(pubDate.getTime());
    return {
      url: `${baseUrl}/writing/${a.slug}`,
      ...(isValidDate ? { lastModified: pubDate } : {}),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...ventureRoutes, ...articleRoutes];
}
