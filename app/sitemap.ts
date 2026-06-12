import { MetadataRoute } from 'next';

const baseUrl = 'https://samkarabrokerage.com';

const locales = ['en', 'es', 'ch', 'ru', 'uz'];

export const dynamic = 'force-static';

const routes = [
  '',
  '/courses',
  '/courses/defensive-driving-course',
  '/courses/pre-licensing',
  '/courses/defensive-driving-course/new-jersey',
  '/courses/defensive-driving-course/new-york',
  '/insurance',
  '/faq',
  '/marketplace',
  '/privacy',
  '/terms'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
