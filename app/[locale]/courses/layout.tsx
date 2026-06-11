import { ReactNode } from "react";

export default function CoursesLayoutPage ({
                                             children,
                                           }: Readonly<{
  children: ReactNode;
}>) {
  return <section className="min-h-screen bg-white font-sans">
    {children}
  </section>
}

export async function generateMetadata ({ params }: { params: Promise<{ locale: string }> }) {
  // const { locale } = await params;
  // const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: "Defensive Driving & Pre-Licensing Courses Online | Samkara Brokerage",
    description: "Save 10% on insurance for 3 years and reduce points with our NY/NJ Defensive Driving Course, or complete your required NY 5-Hour Pre-Licensing Course online — state-approved, self-paced, same-day certificates.",
    metadataBase: new URL('https://samkarabrokerage.com/en/courses'),
    openGraph: {
      title: 'Defensive Driving & Pre-Licensing Courses Online | Samkara Brokerage',
      description: "Save 10% on insurance and reduce points with NY/NJ Defensive Driving Courses, or complete your required NY Pre-Licensing Course online. State-approved, same-day certificates.",
      url: 'https://samkarabrokerage.com/en/courses',
      siteName: 'Samkara Brokerage',
      images: [{ url: '/og-image.png', width: 1200, height: 628 }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Defensive Driving & Pre-Licensing Courses Online',
      description: "State-approved DDC (NY/NJ) and Pre-Licensing courses. Cut points, save on insurance, get certified online with same-day certificates.",
      images: ['/og-image.png'],
    },
  }
}
