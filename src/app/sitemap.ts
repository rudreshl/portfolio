import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.rudresh.fun'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/about`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/projects`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/skills`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/experience`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: 'yearly' },
  ]
}
