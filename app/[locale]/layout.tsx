import "./globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/locale/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

const SITE_URL = 'https://samkarabrokerage.com';

const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  uz: 'uz_UZ',
  es: 'es_ES',
  zh: 'zh_CN',
};

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams () {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout ({
                                            children,
                                            params
                                          }: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang="en">
    <body className={inter.className}>
    <NextIntlClientProvider>
      <Header/>
      <div className="min-h-screen bg-white font-sans">
        {children}
      </div>
      <Footer/>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}

// default locale has no prefix (localePrefix: 'as-needed'). If you use 'always', return `/${l}` for all.
const localePath = (l: string) => (l === routing.defaultLocale ? '' : `/${l}`);

export async function generateMetadata ({
                                          params,
                                        }: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const url = `${SITE_URL}${localePath(locale)}`;

  const languages: Record<string, string> = Object.fromEntries([
    ...routing.locales.map(l => [l, `${SITE_URL}${localePath(l)}`]),
    ['x-default', `${SITE_URL}${localePath(routing.defaultLocale)}`],
  ]);

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      default: t('title'),
      template: '%s | Samkara Brokerage',
    },
    description: t('description'),
    applicationName: 'Samkara Brokerage',
    authors: [{ name: 'Samkara Brokerage' }],
    publisher: 'Samkara Brokerage',
    category: 'Insurance',
    keywords: [
      "TLC insurance NYC",
      "TLC insurance broker NYC",
      "NYC TLC insurance brokerage",
      "TLC insurance quote NYC",
      "TLC car insurance NYC",
      "TLC commercial auto insurance",
      "TLC insurance Brooklyn",
      "TLC insurance Queens",
      "TLC insurance Manhattan",
      "TLC insurance Bronx",
      "TLC insurance Staten Island",
      "Uber driver insurance NYC",
      "Lyft driver insurance NYC",
      "Uber and Lyft insurance NYC",
      "rideshare insurance NYC",
      "black car insurance NYC",
      "black car insurance broker NYC",
      "livery insurance NYC",
      "taxi insurance NYC",
      "yellow cab insurance NYC",
      "commercial auto insurance NYC",
      "commercial vehicle insurance NYC",
      "for-hire vehicle insurance NYC",
      "FHV insurance NYC",
      "TLC licensed driver insurance",
      "TLC vehicle insurance quote",
      "cheap TLC insurance NYC",
      "affordable TLC insurance NYC",
      "TLC insurance monthly payments",
      "TLC insurance renewal NYC",
      "TLC insurance broker Brooklyn",
      "TLC insurance broker Queens",
      "TLC insurance broker Bronx",
      "TLC insurance for Toyota Camry",
      "TLC insurance for Toyota Sienna",
      "Samkara Brokerage",
      "Samkara TLC insurance",
    ],
    alternates: {
      canonical: url,
      languages,
    },

    openGraph: {
      type: 'website',
      url,
      siteName: 'Samkara Brokerage',
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: OG_LOCALE[locale] ?? 'en_US',
      alternateLocale: routing.locales
        .filter(l => l !== locale)
        .map(l => OG_LOCALE[l])
        .filter(Boolean),
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/og-image.png'],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    formatDetection: { telephone: true, address: true, email: true },

    // verification: { google: 'your-search-console-code' },
  };
}
