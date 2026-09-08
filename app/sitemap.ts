import type { MetadataRoute } from "next"
import { writing } from "@/lib/portfolio-data"

const baseUrl = "https://personal-portfolio-overcome1.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...writing.map((post) => ({ url: `${baseUrl}/writing/${post.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 })),
  ]
}
