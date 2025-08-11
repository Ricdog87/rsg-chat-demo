import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lacar-associate.de"
  const now = new Date()

  const routes = [
    "",
    "/personalvermittlung",
    "/schulungen",
    "/outplacement",
    "/freelancer",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/kontakt",
    "/branchen", // Added Branchen page
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
