import { createTranslator } from "next-intl";
import {
  AwardIcon,
  CarIcon, ClockIcon, DollarSignIcon,
  FileTextIcon,
  GraduationCapIcon, HeartIcon, LanguagesIcon, MailIcon, MapPinIcon, PhoneIcon,
  ShieldCheckIcon,
  SmartphoneIcon, StarIcon,
  TruckIcon,
  UsersIcon, ZapIcon
} from "lucide-react";
import { Course } from "@/types/main.ts";
import { useEffect, useRef } from "react";

const PLATFORMS = [
  {
    match: /\buber\b/i,
    label: 'Uber',
    badge: 'bg-white/7 text-white/70 border border-white/10',
    dot: 'bg-white/50',
    hover: 'hover:border-white/25',
    topLine: 'from-transparent via-white/20 to-transparent',
  },
  {
    match: /\blyft\b/i,
    label: 'Lyft',
    badge: 'bg-pink-500/15 text-pink-300 border border-pink-500/20',
    dot: 'bg-pink-400',
    hover: 'hover:border-pink-500/30',
    topLine: 'from-transparent via-pink-500/40 to-transparent',
  },
  {
    match: /yellow\s*(cab|taxi)|\btaxi\b/i,
    label: 'Yellow Taxi',
    badge: 'bg-yellow-400/12 text-yellow-400 border border-yellow-400/20',
    dot: 'bg-yellow-400',
    hover: 'hover:border-yellow-400/30',
    topLine: 'from-transparent via-yellow-400/40 to-transparent',
  },
];

const GOOGLE = {
  label: 'Google Review',
  badge: 'bg-blue-500/15 text-blue-300 border border-blue-500/20',
  dot: 'bg-blue-400',
  hover: 'hover:border-blue-500/30',
  topLine: 'from-transparent via-blue-500/40 to-transparent',
};

export const getPlatform = (text: string) => PLATFORMS.find((p) => p.match.test(text)) ?? GOOGLE;

export const courseUrls: Record<string, string> = {
  'new-york-ddc-en': 'https://checkout.americansafetyinstitute.com/cart/53718710649150:1',
  'new-york-ddc-es': 'https://checkout.americansafetyinstitute.com/cart/53718745153854:1',
  'new-jersey-ddc-en': 'https://checkout.americansafetyinstitute.com/cart/53718748889406:1',
  'new-jersey-ddc-es': 'https://checkout.americansafetyinstitute.com/cart/53718754296126:1',
  'pre-licensing-en': 'https://checkout.americansafetyinstitute.com/cart/53718759080254:1',
  'pre-licensing-es': 'https://checkout.americansafetyinstitute.com/cart/53718764781886:1',
}

export const getHomeServices = (t: ReturnType<typeof createTranslator<any, any>>) => [
  {
    icon: { background: 'bg-yellow-400/10', text: 'text-yellow-400', value: <SmartphoneIcon className="w-6 h-6"/> },
    title: t('Service_Area.list.0.title'), description: t('Service_Area.list.0.description'),
    banner: 'from-zinc-900 to-zinc-800', dot: 'bg-zinc-700',
  },
  {
    icon: { background: 'bg-black/20', text: 'text-black', value: <CarIcon className="w-6 h-6"/> },
    title: t('Service_Area.list.1.title'), description: t('Service_Area.list.1.description'),
    banner: 'from-yellow-400 to-yellow-500', dot: 'bg-yellow-300',
  },
  {
    icon: { background: 'bg-pink-500/20', text: 'text-pink-300', value: <TruckIcon className="w-6 h-6"/> },
    title: t('Service_Area.list.2.title'), description: t('Service_Area.list.2.description'),
    banner: 'from-zinc-800 to-zinc-900', dot: 'bg-pink-500',
  },
  {
    icon: { background: 'bg-white/15', text: 'text-white', value: <UsersIcon className="w-6 h-6"/> },
    title: t('Service_Area.list.3.title'), description: t('Service_Area.list.3.description'),
    banner: 'from-pink-600 to-pink-700', dot: 'bg-pink-300',
  },
  {
    icon: { background: 'bg-yellow-400/20', text: 'text-yellow-300', value: <FileTextIcon className="w-6 h-6"/> },
    title: t('Service_Area.list.4.title'), description: t('Service_Area.list.4.description'),
    banner: 'from-green-700 to-green-800', dot: 'bg-green-400',
  },
];

export const getHomeAdvantages = (t: ReturnType<typeof createTranslator<any, any>>) => [
  {
    icon: <DollarSignIcon className="w-5 h-5 text-black"/>,
    title: t('Trust.list.0.title'),
    description: t('Trust.list.0.description')
  },
  {
    icon: <ZapIcon className="w-5 h-5 text-black"/>,
    title: t('Trust.list.1.title'),
    description: t('Trust.list.1.description')
  },
  {
    icon: <AwardIcon className="w-5 h-5 text-black"/>,
    title: t('Trust.list.2.title'),
    description: t('Trust.list.2.description')
  },
  {
    icon: <HeartIcon className="w-5 h-5 text-black"/>,
    title: t('Trust.list.3.title'),
    description: t('Trust.list.3.description')
  },
  {
    icon: <LanguagesIcon className="w-5 h-5 text-black"/>,
    title: t('Trust.list.4.title'),
    description: t('Trust.list.4.description')
  },
];

export const getHomeContacts = (t: ReturnType<typeof createTranslator<any, any>>) => [
  {
    icon: { value: <PhoneIcon className="w-5 h-5 text-black"/>, background: 'bg-yellow-400' },
    title: t('Contact.list.phone'), href: 'tel:+12123145555',
    content: { value: '(212) 314-5555', style: 'text-yellow-600 font-semibold' },
  },
  {
    icon: { value: <MailIcon className="w-5 h-5 text-white"/>, background: 'bg-pink-500' },
    title: t('Contact.list.email'), href: 'mailto:info@samkarabrokerage.com',
    content: { value: 'info@samkarabrokerage.com', style: 'text-pink-500 font-semibold text-sm' },
  },
  {
    icon: { value: <MapPinIcon className="w-5 h-5 text-white"/>, background: 'bg-zinc-900' },
    title: t('Contact.list.office'), href: undefined,
    content: { value: '4710 32nd Place, Long Island City, NY 11101', style: 'text-zinc-500 text-sm' },
  },
  {
    icon: { value: <ClockIcon className="w-5 h-5 text-white"/>, background: 'bg-green-600' },
    title: t('Contact.list.hours'), href: undefined,
    content: { value: 'Mon-Fri: 9am - 5pm, Sat: Closed', style: 'text-zinc-500 text-sm' },
  },
];

export const getHomeCourses = (t: ReturnType<typeof createTranslator<any, any>>): Course[] => [
  {
    banner: {
      background: 'bg-yellow-600',
      iconBackground: 'bg-zinc-900',
      iconColor: 'text-yellow-600',
      icon: <ShieldCheckIcon className="w-5 h-5 text-yellow-400"/>,
      title: t('Courses.ddc.new_york.title'),
    },
    badge: { label: t('Courses.ddc.new_york.badge'), style: 'bg-pink-50 text-pink-700 border border-pink-200' },
    description: t('Courses.ddc.new_york.description'),
    modules: [
      t('Courses.ddc.new_york.modules.0'),
      t('Courses.ddc.new_york.modules.1'),
      t('Courses.ddc.new_york.modules.2'),
      t('Courses.ddc.new_york.modules.3'),
    ],
    price: '$35',
    priceSub: t('Courses.ddc.new_york.priceSub'),
    actionUrl: (locale: string) => {
      const options: Record<string, string> = {
        en: courseUrls['new-york-ddc-en'],
        es: courseUrls['new-york-ddc-es']
      }

      return options[locale];
    }
  },
  {
    banner: {
      background: 'bg-blue-950',
      iconBackground: 'bg-blue-400/15',
      iconColor: 'text-blue-400',
      icon: <CarIcon className="w-5 h-5 text-blue-400"/>,
      title: t('Courses.ddc.new_jersey.title'),
    },
    badge: { label: t('Courses.ddc.new_jersey.badge'), style: 'bg-yellow-50 text-yellow-700 border border-yellow-200' },
    description: t('Courses.ddc.new_jersey.description'),
    modules: [
      t('Courses.ddc.new_jersey.modules.0'),
      t('Courses.ddc.new_jersey.modules.1'),
      t('Courses.ddc.new_jersey.modules.2'),
      t('Courses.ddc.new_jersey.modules.3'),
    ],
    price: '$35',
    priceSub: t('Courses.ddc.new_jersey.priceSub'),
    actionUrl: (locale: string) => {
      const options: Record<string, string> = {
        en: courseUrls['new-jersey-ddc-en'],
        es: courseUrls['new-jersey-ddc-es']
      }

      return options[locale];
    }
  },
  {
    banner: {
      background: 'bg-green-950',
      iconBackground: 'bg-green-400/15',
      iconColor: 'text-green-400',
      icon: <GraduationCapIcon className="w-5 h-5 text-green-400"/>,
      title: t('Courses.pre_licensing.title'),
    },
    badge: { label: t('Courses.pre_licensing.badge'), style: 'bg-green-50 text-green-700 border border-green-200' },
    description: t('Courses.pre_licensing.description'),
    modules: [
      t('Courses.pre_licensing.modules.0'),
      t('Courses.pre_licensing.modules.1'),
      t('Courses.pre_licensing.modules.2'),
      t('Courses.pre_licensing.modules.3'),
    ],
    price: '$79',
    priceSub: t('Courses.pre_licensing.priceSub'),
    actionUrl: (locale: string) => {
      const options: Record<string, string> = {
        en: courseUrls['pre-licensing-en'],
        es: courseUrls['pre-licensing-es']
      }

      return options[locale];
    }
  },
];

export const HomeRatingStars = ({ rating, className = 'w-4 h-4' }: { rating: number; className?: string }) => {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));
  const percent = (value / 5) * 100;

  return (
    <div
      className="relative inline-flex"
      role="img"
      aria-label={`${value.toFixed(1)} out of 5 stars`}
    >
      {/* empty stars underneath */}
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="px-0.5">
            <StarIcon className={`${className} fill-transparent text-zinc-600`}/>
          </span>
        ))}
      </div>

      {/* yellow stars on top, clipped to the rating */}
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${percent}%` }}>
        <div className="flex w-max">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="px-0.5">
              <StarIcon className={`${className} fill-yellow-400 text-yellow-400`}/>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ad_items = [
  'Rideshare Coverage',
  'Same-Day TLC',
  'Fleet Insurance',
  'Black Car & Livery',
  'Best Rates Guaranteed',
  'Multilingual Staff',
  '30+ Years Experience',
];

export const HOME_VISIBLE_REVIEWS = 3;

// function AnimatedCounter ({ value, suffix = '' }: { value: number; suffix?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//
//     const animate = () => {
//       let start = 0;
//       const duration = 1400;
//       const step = (timestamp: number) => {
//         if (!start) start = timestamp;
//         const progress = Math.min((timestamp - start) / duration, 1);
//         const eased = 1 - Math.pow(1 - progress, 3);
//         el.textContent = (eased * value).toFixed(1) + suffix;
//         if (progress < 1) requestAnimationFrame(step);
//       };
//       requestAnimationFrame(step);
//     };
//
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         observer.disconnect();
//         animate();
//       },
//       { threshold: 0.3 }
//     );
//
//     observer.observe(el);
//
//     // Fallback: if element is already in view at mount (e.g. above the fold,
//     // or IntersectionObserver fires late on fast-loading pages), animate immediately
//     const rect = el.getBoundingClientRect();
//     const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
//     if (isInViewport) {
//       observer.disconnect();
//       animate();
//     }
//
//     return () => observer.disconnect();
//   }, [value, suffix]);
//
//   // SSR/initial render shows final value instead of 0, so crawlers and
//   // no-JS users see real content instead of "0"
//   return <span ref={ref}>{value}{suffix}</span>;
// }
