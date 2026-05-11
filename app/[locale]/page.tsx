"use client"

import './page.css';

import {
  ArrowRightIcon, AwardIcon,
  CarIcon,
  CircleCheckBigIcon,
  CircleHelpIcon, ClockIcon,
  DollarSignIcon, FileTextIcon, HeartIcon, LanguagesIcon, MailIcon,
  MapPinIcon,
  PhoneIcon,
  SmartphoneIcon, StarIcon, TruckIcon, UsersIcon, ZapIcon
} from 'lucide-react';
import { useTranslations, createTranslator } from "next-intl";
import { Link } from "@/locale/navigation";
import { useEffect, useRef } from "react";

const services = (t: ReturnType<typeof createTranslator<any, any>>) => [
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

const advantages = (t: ReturnType<typeof createTranslator<any, any>>) => [
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

const contacts = (t: ReturnType<typeof createTranslator<any, any>>) => [
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

const testimonials = [
  {
    platform: 'Uber',
    platformStyle: 'bg-white/7 text-white/70 border border-white/10',
    dotColor: 'bg-white/50',
    cardHoverBorder: 'hover:border-white/25',
    topLine: 'from-transparent via-white/20 to-transparent',
    quote: 'They saved me $200/month on my Uber insurance! The team was incredibly helpful and got me covered the same day. Highly recommend to all rideshare drivers.',
    highlight: '$200/month',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    name: 'Mohammed R.', role: 'Uber Driver · 4 years',
  },
  {
    platform: 'Lyft',
    platformStyle: 'bg-pink-500/15 text-pink-300 border border-pink-500/20',
    dotColor: 'bg-pink-400',
    cardHoverBorder: 'hover:border-pink-500/30',
    topLine: 'from-transparent via-pink-500/40 to-transparent',
    quote: 'After my accident, they handled everything. The claims process was smooth and I was back on the road in no time. Best insurance broker in NYC!',
    highlight: 'handled everything',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    name: 'Maria G.', role: 'Lyft & Uber Driver',
  },
  {
    platform: 'Yellow Taxi',
    platformStyle: 'bg-yellow-400/12 text-yellow-400 border border-yellow-400/20',
    dotColor: 'bg-yellow-400',
    cardHoverBorder: 'hover:border-yellow-400/30',
    topLine: 'from-transparent via-yellow-400/40 to-transparent',
    quote: "I've been with them for 8 years now. They always find me the best rates and their customer service is outstanding. A+ experience every time.",
    highlight: '8 years',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    name: 'Rajesh P.', role: 'Yellow Taxi Owner',
  },
];

function AnimatedCounter ({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const duration = 1400;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (eased * value).toFixed(1) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Home () {
  const t = useTranslations('HomePage');

  return (
    <div className="font-[Outfit,sans-serif]">

      {/* ═══ HERO ═══ */}
      <section className="pt-20 md:pt-24 bg-zinc-950 relative overflow-hidden min-h-[600px]">

        {/* Grid background */}
        <div className="hero-grid-bg absolute inset-0"/>

        {/* Glow orbs */}
        <div className="hero-glow-a absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"/>
        <div
          className="hero-glow-b absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"/>

        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-14 border-t border-yellow-400/8 overflow-hidden">
          <div className="absolute bottom-4 left-0 right-0 flex overflow-hidden">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="hero-road-dash flex-shrink-0 h-1 w-14 mr-10 bg-yellow-400/15 rounded-full"
                style={{ animationDelay: `${i * -0.15}s` }}
              />
            ))}
          </div>
        </div>

        {/* Ticker */}
        <div className="bg-amber-400 py-3.5 overflow-hidden border-y border-black/10">
          <div className="ticker-track flex whitespace-nowrap">
            {[...Array(100)].map((_, pass) =>
              ['Rideshare Coverage', 'Same-Day TLC', 'Fleet Insurance',
                'Black Car & Livery', 'Best Rates Guaranteed',
                'Multilingual Staff', '30+ Years Experience'].map((item, i) => (
                <span
                  key={`${pass}-${i}`}
                  className="ticker-item inline-flex items-center gap-4 px-9 font-bold text-xs tracking-widest uppercase text-black shrink-0"
                >
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-black/25"/>
                </span>
              ))
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { label: 'Uber', cls: 'bg-zinc-800 text-white border border-zinc-700', i: 0 },
                  { label: 'Lyft', cls: 'bg-pink-500 text-white', i: 1 },
                  { label: 'Yellow Taxi', cls: 'bg-yellow-400 text-black', i: 2 },
                  { label: 'Black Car', cls: 'bg-zinc-800 text-white border border-zinc-700', i: 3 },
                ].map(p => (
                  <span key={p.label}
                        className={`hero-pill hero-pill-${p.i} ${p.cls} px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase`}>
                    {p.label}
                  </span>
                ))}
              </div>

              <h1
                className="hero-h1-anim text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6 tracking-tight">
                {t.rich("Top.title", {
                  confidence: (chunks) => <span className="text-yellow-400">{chunks}</span>,
                  save: (chunks) => <span className="text-pink-400">{chunks}</span>,
                  br: () => <br/>,
                })}
              </h1>

              <p className="hero-desc-anim text-lg text-zinc-400 mb-8 leading-relaxed font-light">
                {t('Top.description')}
              </p>

              <ul className="hero-checks-anim space-y-3 mb-8">
                {[t('Top.advantages.first'), t('Top.advantages.second'), t('Top.advantages.third')].map((adv, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <span
                      className="w-5 h-5 rounded-full bg-yellow-400/15 border border-yellow-400 flex items-center justify-center flex-shrink-0">
                      <CircleCheckBigIcon className="w-3 h-3 text-yellow-400"/>
                    </span>
                    <span className="text-sm">{adv}</span>
                  </li>
                ))}
              </ul>

              <div className="hero-actions-anim flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-base hover:bg-yellow-300 transition-all hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(246,201,14,0.3)] hover:shadow-[0_12px_40px_rgba(246,201,14,0.45)]"
                >
                  {t('Top.get_started_today')}
                  <ArrowRightIcon className="w-5 h-5"/>
                </Link>
                <a
                  href="tel:+12123145555"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors border border-white/12"
                >
                  <PhoneIcon className="w-5 h-5"/>
                  {t('Top.call_now')}
                </a>
              </div>
            </div>

            {/* Right card */}
            <div className="hero-card-anim hidden lg:block">
              <div className="relative">
                <div
                  className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-7 border border-yellow-400/12 shadow-2xl relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"/>
                  <div className="relative">
                    <img
                      alt="NYC Taxi and Rideshare"
                      className="w-full h-64 object-cover rounded-2xl border border-white/6"
                      src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=600&q=80"
                    />
                    <div
                      className="absolute -top-3 -right-3 bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-xs shadow-lg flex items-center gap-1.5 tracking-wide uppercase">
                      <CarIcon className="w-3.5 h-3.5"/> {t('Top.tlc_approved')}
                    </div>
                    <div
                      className="absolute -bottom-3 -left-3 bg-pink-500 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-lg flex items-center gap-1.5 tracking-wide uppercase">
                      <SmartphoneIcon className="w-3.5 h-3.5"/> {t('Top.all_platforms')}
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                    {[
                      { num: '30+', lbl: t('Top.years'), color: 'text-yellow-400' },
                      { num: '5K+', lbl: t('Top.drivers'), color: 'text-pink-400' },
                      { num: 'A+', lbl: 'BBB', color: 'text-yellow-400' },
                    ].map(s => (
                      <div key={s.lbl}
                           className="bg-zinc-800/80 rounded-xl p-4 border border-white/5 hover:border-yellow-400/25 hover:bg-yellow-400/4 transition-all cursor-default">
                        <div className={`text-3xl font-black ${s.color}`}>{s.num}</div>
                        <div className="text-zinc-500 text-xs mt-1 uppercase tracking-wider">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="insurance" className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-700 px-4 py-2 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
              <MapPinIcon className="w-3.5 h-3.5"/>
              {t('Service_Area.chip')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
              {t.rich('Service_Area.title', { every: (c) => <span className="text-yellow-600">{c}</span> })}
            </h2>
            <p
              className="text-base text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">{t('Service_Area.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services(t).map((service, idx) => (
              <div key={idx}
                   className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-zinc-100 group cursor-pointer">
                <div
                  className={`bg-gradient-to-br ${service.banner} h-20 flex items-center px-6 relative overflow-hidden`}>
                  <div
                    className={`${service.icon.background} ${service.icon.text} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon.value}
                  </div>
                  <div
                    className={`absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${service.dot} opacity-60 animate-[pulse_2s_ease-in-out_infinite]`}/>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-zinc-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section id="why-us" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                {[
                  { label: 'Uber', cls: 'bg-zinc-900 text-yellow-400' },
                  { label: 'Lyft', cls: 'bg-pink-500 text-white' },
                  { label: 'Taxi', cls: 'bg-yellow-400 text-black' },
                ].map(p => (
                  <span key={p.label}
                        className={`${p.cls} px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase`}>{p.label}</span>
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
                {t.rich('Trust.title', { trust: (c) => <span className="text-yellow-600">{c}</span> })}
              </h2>
              <p className="text-base text-zinc-500 mb-8 leading-relaxed font-light">{t('Trust.description')}</p>
              <div
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-yellow-400/12 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"/>
                <div className="text-6xl font-black text-yellow-400/10 leading-none mb-[-16px]">"</div>
                <div className="flex items-start gap-4 relative z-10">
                  <img alt="Insurance Agent"
                       className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400/40 flex-shrink-0"
                       src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"/>
                  <div>
                    <p
                      className="text-zinc-400 italic mb-3 text-sm leading-relaxed font-light">{t('Trust.quote.text')}</p>
                    <p className="font-bold text-white text-sm">Sam Karabelnik</p>
                    <p className="text-xs text-yellow-400 mt-0.5">{t('Trust.quote.position')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages(t).map((adv, i) => (
                <div key={i}
                     className={`flex gap-4 p-5 rounded-2xl border border-zinc-100 hover:border-yellow-400/30 hover:bg-yellow-50/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${i === 4 ? 'sm:col-span-2' : ''}`}>
                  <div
                    className="w-11 h-11 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(246,201,14,0.25)]">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 mb-1 text-sm">{adv.title}</h3>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-20 md:py-28 bg-zinc-950 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"/>
        <div
          className="absolute top-[3px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"/>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl"/>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/4 blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              {[
                { label: 'Uber', cls: 'bg-zinc-800 text-white border border-zinc-700' },
                { label: 'Lyft', cls: 'bg-pink-500 text-white' },
                { label: 'Taxi', cls: 'bg-yellow-400 text-black' },
              ].map(p => (
                <span key={p.label}
                      className={`${p.cls} px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase`}>{p.label}</span>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              {t.rich('Testimonials.title', { driver: (c) => <span className="text-yellow-400">{c}</span> })}
            </h2>
            <p className="text-base text-zinc-500 max-w-2xl mx-auto font-light">{t('Testimonials.description')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {testimonials.map((testi, i) => (
              <div key={i}
                   className={`bg-white/[0.03] border border-white/7 rounded-2xl p-7 relative overflow-hidden group ${testi.cardHoverBorder} hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${testi.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${testi.platformStyle} mb-4`}>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${testi.dotColor} animate-[pulse_2s_ease-in-out_infinite]`}/>
                  {testi.platform}
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"/>
                  ))}
                </div>
                <div className="text-[56px] font-black text-yellow-400/10 leading-none mb-[-10px]">"</div>
                <p className="text-zinc-400 text-sm leading-[1.8] mb-6 font-light">
                  {testi.quote.split(testi.highlight).map((part, idx, arr) => (
                    idx < arr.length - 1
                      ? <span key={idx}>{part}<strong
                        className="text-white font-semibold">{testi.highlight}</strong></span>
                      : <span key={idx}>{part}</span>
                  ))}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  <img alt={testi.name} className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400/30"
                       src={testi.avatar}/>
                  <div>
                    <span className="text-white font-semibold text-sm block">{testi.name}</span>
                    <span className="text-zinc-500 text-xs mt-0.5 block">{testi.role}</span>
                  </div>
                  <div
                    className="ml-auto bg-yellow-400/8 border border-yellow-400/15 rounded-full px-2.5 py-1 text-[10px] text-yellow-400/60 font-medium">
                    ✓ Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="bg-white/[0.02] border border-white/7 rounded-2xl px-8 py-7 flex flex-wrap justify-center items-center gap-0">
            {[
              { num: 4.9, suffix: '', label: t('Testimonials.statistics.google_rating'), color: 'text-yellow-400' },
              { num: 500, suffix: '+', label: t('Testimonials.statistics.reviews'), color: 'text-pink-400' },
              { num: 98, suffix: '%', label: t('Testimonials.statistics.renewal_rate'), color: 'text-yellow-400' },
            ].map((s, i) => (
              <div key={i} className={`text-center px-10 ${i > 0 ? 'border-l border-white/7' : ''}`}>
                <div className={`text-4xl font-black ${s.color}`}>
                  <AnimatedCounter value={s.num} suffix={s.suffix}/>
                </div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
              {t.rich('Contact.title', { touch: (c) => <span className="text-yellow-600">{c}</span> })}
            </h2>
            <p className="text-base text-zinc-500 max-w-2xl mx-auto font-light">{t('Contact.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {contacts(t).map((contact, i) => (
              <div key={i}
                   className="bg-white rounded-2xl border border-zinc-200 p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:border-yellow-400/30 transition-all duration-200 cursor-pointer">
                <div
                  className={`w-12 h-12 ${contact.icon.background} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {contact.icon.value}
                </div>
                <h3 className="font-bold text-zinc-900 mb-2 text-sm uppercase tracking-wide">{contact.title}</h3>
                {contact.href
                  ? <a href={contact.href}
                       className={`${contact.content.style} hover:underline`}>{contact.content.value}</a>
                  : <p className={contact.content.style}>{contact.content.value}</p>
                }
              </div>
            ))}
          </div>
          <div
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 text-center relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"/>
            <div
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-yellow-400/4 blur-3xl pointer-events-none"/>
            <CircleHelpIcon className="w-10 h-10 text-yellow-400 mx-auto mb-4"/>
            <h3 className="text-2xl font-black text-white mb-2">{t('Contact.question')}</h3>
            <p className="text-zinc-400 mb-8 font-light text-sm">{t('Contact.question_description')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/insurance"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-black px-7 py-3.5 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-[0_4px_20px_rgba(246,201,14,0.3)]">
                Get Started
              </Link>
              <Link href="tel:+12123145555"
                    className="inline-flex items-center gap-2 bg-white/8 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/15 transition-colors border border-white/12">
                <PhoneIcon className="w-4 h-4"/> (212) 314-5555
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
