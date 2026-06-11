import "./globals.css";
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer/Footer";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/locale/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

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

export async function generateMetadata ({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://samkarabrokerage.com'),
    openGraph: {
      title: 'Samkara Brokerage — NYC TLC Insurance for Rideshare & Taxi Drivers',
      description: "Lowest rates guaranteed. Same-day TLC coverage. Uber, Lyft, Yellow Cab, Black Car & Ambulette. 30+ years serving NYC drivers.",
      url: 'https://samkarabrokerage.com',
      siteName: 'Samkara Brokerage',
      images: [{ url: '/og-image.png', width: 1200, height: 628 }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Samkara Brokerage — NYC TLC Insurance',
      description: "Lowest rates for Uber, Lyft, Taxi & Black Car. Same-day TLC coverage available.",
      images: ['/og-image.png'],
    },
  };
}
