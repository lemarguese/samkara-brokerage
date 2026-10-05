"use client"

import './page.css';

import {
  ArrowRightIcon,
  CarIcon,
  CircleCheckBigIcon,
  CircleHelpIcon,
  MapPinIcon,
  PhoneIcon,
  SmartphoneIcon, StarIcon,
  InfoIcon
} from 'lucide-react';
import { useTranslations } from "next-intl";
import { Link } from "@/locale/navigation";
import { use, useEffect, useState } from "react";
import Image from "next/image";

import Marquee from "react-fast-marquee";

import SpanishFlag from '../../public/flags/es.svg';
import UnitedStatesFlag from '../../public/flags/us.svg';
import { Course, IReviewsData } from "@/types/main.ts";
import {
  ad_items,
  getHomeAdvantages,
  getHomeContacts,
  getHomeCourses,
  getHomeServices, getPlatform, HOME_VISIBLE_REVIEWS, HomeRatingStars,
} from "@/lib/home.tsx";

export default function Home ({
                                params
                              }: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations('HomePage');

  const [data, setData] = useState<IReviewsData>({
    reviews: [],
    rating: 5,
    total: 0,
  });

  useEffect(() => {
    fetch("/reviews/reviews.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(setData)
      .catch((err) => console.error("Reviews failed to load:", err));
  }, []);

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
                key={`road-item-${i}`}
                className="hero-road-dash flex-shrink-0 h-1 w-14 mr-10 bg-yellow-400/15 rounded-full"
                style={{ animationDelay: `${i * -0.15}s` }}
              />
            ))}
          </div>
        </div>

        {/* Ticker */}
        <div className="bg-amber-400 py-3.5 overflow-hidden border-y border-black/10">
          <Marquee autoFill speed={150}>
            <div className='marquee-group'>
              {ad_items.map((item) => (
                <span key={item}
                      className="ticker-item inline-flex items-center gap-4 px-9 font-bold text-xs tracking-widest uppercase text-black shrink-0">
                    {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-black/25"/>
                </span>
              ))}
            </div>
          </Marquee>
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
                  <li key={`advantages-hero-checks-${i}`} className="flex items-center gap-3 text-white">
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
            {getHomeServices(t).map((service, idx) => (
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

      {/* ═══ ONLINE COURSES ═══ */}
      <section id="courses" className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 items-center text-center mb-16">
            <div
              className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <SmartphoneIcon className="w-3.5 h-3.5"/>
              {t('Courses.chip')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
              {t.rich('Courses.title', { highlight: (c) => <span className="text-yellow-600">{c}</span> })}
            </h2>
            <p className="text-base text-zinc-500 max-w-2xl mx-auto font-light">{t('Courses.description')}</p>
            {locale !== 'es' ? <div className="w-fit bg-blue-50 border border-blue-200 rounded-xl p-3 mb-2">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <InfoIcon className="w-5 h-5 flex-shrink-0"/>
                <span>{t('Courses.warning')}</span>
              </p>
            </div> : null}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { num: t('Courses.stats.online.title'), label: t('Courses.stats.online.description') },
              { num: t('Courses.stats.approved.title'), label: t('Courses.stats.approved.description') },
              { num: t('Courses.stats.certificate.title'), label: t('Courses.stats.certificate.description') },
            ].map((s, i) => (
              <div key={`courses-stats-item-${i}`}
                   className="bg-white rounded-2xl border border-zinc-100 p-6 text-center">
                <div className="text-3xl font-black text-yellow-500">{s.num}</div>
                <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {getHomeCourses(t).map((course, i) => (
              <CourseCard key={`course-card-item-${i}`} course={course} locale={locale}/>
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
              {getHomeAdvantages(t).map((adv, i) => (
                <div key={`why-us-advantages-item-${i}`}
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

          <>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {data.reviews.slice(0, HOME_VISIBLE_REVIEWS).map((review, i) => {
                const p = getPlatform(review.text);
                return (
                  <div
                    key={`testimonials-item-${i}`}
                    className={`bg-white/[0.03] border border-white/7 rounded-2xl p-7 relative overflow-hidden group ${p.hover} hover:-translate-y-1 transition-all duration-300 flex flex-col`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${p.topLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div
                      className={`inline-flex self-start items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${p.badge} mb-4`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dot} animate-[pulse_2s_ease-in-out_infinite]`}/>
                      {p.label}
                    </div>

                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s < review.stars ? 'fill-yellow-400 text-yellow-400' : 'fill-transparent text-zinc-600'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="text-[56px] font-black text-yellow-400/10 leading-none mb-[-10px]">"</div>

                    {/* clamped to 4 lines, flex-1 keeps all cards the same height */}
                    <p className="text-zinc-400 text-sm leading-[1.8] mb-6 font-light line-clamp-4 flex-1">
                      {review.text}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                      {review.photo ? (
                        <img
                          alt={review.name}
                          src={review.photo}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400/30"
                        />
                      ) : (
                        <div
                          className="w-10 h-10 rounded-full border-2 border-yellow-400/30 bg-white/5 flex items-center justify-center text-white font-semibold text-sm">
                          {review.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="text-white font-semibold text-sm block truncate">{review.name}</span>
                        <span className="text-zinc-500 text-xs mt-0.5 block">{review.when}</span>
                      </div>
                      <div
                        className="ml-auto shrink-0 bg-yellow-400/8 border border-yellow-400/15 rounded-full px-2.5 py-1 text-[10px] text-yellow-400/60 font-medium">
                        Google Review
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rating summary + link to Google Maps */}
            <div
              className="flex flex-col md:flex-row items-center justify-between gap-5 bg-white/[0.03] border border-white/7 rounded-2xl px-6 py-5 mb-12">
              <div className="flex items-center gap-4">
                {/* Google "G" */}
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 48 48" className="w-6 h-6" aria-hidden="true">
                    <path fill="#EA4335"
                          d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"/>
                    <path fill="#4285F4"
                          d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"/>
                    <path fill="#FBBC05" d="M10.5 28.7a14.5 14.5 0 0 1 0-9.4l-7.9-6.1a24 24 0 0 0 0 21.6l7.9-6.1z"/>
                    <path fill="#34A853"
                          d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/>
                  </svg>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-white text-2xl font-bold leading-none">{Number(data.rating).toFixed(1)}</span>
                    <HomeRatingStars rating={data.rating} className="w-4 h-4"/>
                  </div>
                  <p className="text-zinc-500 text-xs mt-1">
                    Based on <span className="text-zinc-300 font-medium">{data.total}</span> Google reviews
                  </p>
                </div>
              </div>

              {/* Google Maps button */}
              {data.mapsUrl && (
                <div className="flex justify-center">
                  <a href={data.mapsUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group/cta inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                  >
                    {t('Testimonials.cta.see_all_reviews')}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M8 7h9v9"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </>
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
            {getHomeContacts(t).map((contact, i) => (
              <div key={`contacts-item-${i}`}
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

const CourseCard = ({
                      course, locale
                    }: {
  course: Course, locale
    :
    string
}) => (
  <div
    className="bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-yellow-400/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
    <div className={`${course.banner.background} h-20 flex items-center px-6 gap-4`}>
      <div
        className={`${course.banner.iconBackground} w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        {course.banner.icon}
      </div>
      <h3 className="text-sm font-bold text-white leading-tight">{course.banner.title}</h3>
    </div>

    <div className="p-6">
      <div className="flex items-center gap-2 justify-between mb-3">
        <span className={`${course.badge.style} text-xs font-bold px-3 py-1 rounded-full`}>
          {course.badge.label}
        </span>
        <span className='flex flex-row gap-2 items-center'>
          <Image src={UnitedStatesFlag} width={30} height={24} className='rounded-[4px]'
                 alt='english-united-states-flag'/>
          <Image src={SpanishFlag} width={30} height={24} className='rounded-[4px]' alt='english-spanish-flag'/>
        </span>
      </div>

      <p className="text-sm text-zinc-500 font-light leading-relaxed mb-4">
        {course.description}
      </p>

      <ul className="space-y-2 mb-5">
        {course.modules.map((mod, i) => (
          <li key={`course-card-modules-item-${i}`} className="flex items-center gap-2.5 text-xs text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"/>
            {mod}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
        <div>
          <div className="text-xl font-black text-zinc-900">{course.price}</div>
          <div className="text-xs text-zinc-400">{course.priceSub}</div>
        </div>
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
          onClick={() => {
            const urlByLocale = course.actionUrl(locale);

            window.open(urlByLocale, '_blank');
          }}>
          Enroll now
        </button>
      </div>
    </div>
  </div>
);
