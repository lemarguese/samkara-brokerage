import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'ch', 'ru', 'uz'],

  defaultLocale: 'en'
});
