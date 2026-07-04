import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://namri-amine.vercel.app'
const lastUpdated = new Date('2026-06-05T00:00:00Z')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
