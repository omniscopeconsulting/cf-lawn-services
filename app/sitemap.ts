import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/services", "/gallery", "/about", "/contact"]; return routes.map(route => ({ url: `https://cflawnservices.com${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })); }
