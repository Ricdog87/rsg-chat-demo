import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lacar-associate.de/sitemap.xml",
    host: "https://lacar-associate.de",
  }
}
