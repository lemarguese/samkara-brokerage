"use client"

import {
  ArrowRightIcon, AwardIcon,
  CarIcon,
  CircleCheckBigIcon,
  CircleHelpIcon, ClockIcon,
  DollarSignIcon, FileTextIcon, HeartIcon, LanguagesIcon, MailIcon,
  MapPinIcon,
  PhoneIcon, QuoteIcon,
  SmartphoneIcon, StarIcon, TruckIcon, UsersIcon, ZapIcon
} from 'lucide-react';
import { useTranslations } from "next-intl";
import createTranslator from "use-intl/dist/types/core/createTranslator";
import { Messages } from "use-intl/dist/types/core/AppConfig";
import { Link } from "@/locale/navigation";

const services = (t: ReturnType<typeof createTranslator<Messages, any>>) => [
  {
    icon: {
      background: 'taxi-500',
      text: 'uber-900',
      value: <SmartphoneIcon/>
    },
    title: t('Service_Area.list.0.title'),
    description: t('Service_Area.list.0.description'),
    background: {
      from: 'uber-900',
      to: 'gray-800'
    }
  },
  {
    icon: {
      background: 'uber-900',
      text: 'taxi-500',
      value: <CarIcon/>
    },
    title: t('Service_Area.list.1.title'),
    description: t('Service_Area.list.1.description'),
    background: {
      from: 'taxi-500',
      to: 'taxi-600'
    }
  },
  {
    icon: {
      background: 'lyft-500',
      text: 'white',
      value: <TruckIcon/>
    },
    title: t('Service_Area.list.2.title'),
    description: t('Service_Area.list.2.description'),
    background: {
      from: 'gray-800',
      to: 'uber-900'
    }
  },
  {
    icon: {
      background: 'white',
      text: 'lyft-600',
      value: <UsersIcon/>
    },
    title: t('Service_Area.list.3.title'),
    description: t('Service_Area.list.3.description'),
    background: {
      from: 'lyft-500',
      to: 'lyft-600'
    }
  },
  {
    icon: {
      background: 'taxi-500',
      text: 'uber-900',
      value: <FileTextIcon/>
    },
    title: t('Service_Area.list.4.title'),
    description: t('Service_Area.list.4.description'),
    background: {
      from: 'green-600',
      to: 'green-700'
    }
  }
];

const advantages = (t: ReturnType<typeof createTranslator<Messages, any>>) => [
  {
    icon: <DollarSignIcon/>,
    title: t('Trust.list.0.title'),
    description: t('Trust.list.0.description'),
  },
  {
    icon: <ZapIcon/>,
    title: t('Trust.list.1.title'),
    description: t('Trust.list.1.description'),
  },
  {
    icon: <AwardIcon/>,
    title: t('Trust.list.2.title'),
    description: t('Trust.list.2.description'),
  },
  {
    icon: <HeartIcon/>,
    title: t('Trust.list.3.title'),
    description: t('Trust.list.3.description'),
  },
  {
    icon: <LanguagesIcon/>,
    title: t('Trust.list.4.title'),
    description: t('Trust.list.4.description'),
  }
];

const contacts = (t: ReturnType<typeof createTranslator<Messages, any>>) => [
  {
    icon: {
      value: <PhoneIcon className='text-white'/>,
      background: 'taxi-500'
    },
    title: t('Contact.list.phone'),
    content: {
      value: '(212) 314-5555',
      style: 'taxi-600'
    },
    href: 'tel:+12123145555'
  },
  {
    icon: {
      value: <MailIcon className='text-white'/>,
      background: 'lyft-500'
    },
    title: t('Contact.list.email'),
    content: {
      value: 'info@samkarabrokerage.com',
      style: 'lyft-500'
    },
    href: 'mailto:info@samkarabrokerage.com'
  },
  {
    icon: {
      value: <MapPinIcon className='text-white'/>,
      background: 'uber-900'
    },
    title: t('Contact.list.office'),
    content: {
      value: '4710 32nd Place, Long Island City, NY 11101',
      style: 'gray-600'
    },
    href: undefined
  },
  {
    icon: {
      value: <ClockIcon className='text-white'/>,
      background: 'green-600'
    },
    title: t('Contact.list.hours'),
    content: {
      value: 'Mon-Fri: 9am - 5pm, Sat: Closed',
      style: 'gray-600'
    },
    href: undefined
  }
];

export default function Home () {
  const t = useTranslations('HomePage');

  return (
    <div>
      <section className="pt-20 md:pt-24 bg-uber-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-taxi-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-lyft-500/10 rounded-full blur-3xl"></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-taxi-500/5 to-transparent rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-6"><span
                className="bg-uber-900 text-white px-3 py-1 rounded-full text-xs font-bold">Uber</span><span
                className="bg-lyft-500 text-white px-3 py-1 rounded-full text-xs font-bold">Lyft</span><span
                className="bg-taxi-500 text-uber-900 px-3 py-1 rounded-full text-xs font-bold">Yellow Taxi</span><span
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">Black Car</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {t.rich("Top.title", {
                  confidence: (chunks) => <span className="text-taxi-500">{chunks}</span>,
                  save: (chunks) => <span className="text-lyft-400">{chunks}</span>,
                  br: () => <br/>
                })}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">{t('Top.description')}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <CircleCheckBigIcon className='text-taxi-500 w-5 h-5 flex-shrink-0'/>
                  <span>{t('Top.advantages.first')}</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CircleCheckBigIcon className='text-taxi-500 w-5 h-5 flex-shrink-0'/>
                  <span>{t('Top.advantages.second')}</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <CircleCheckBigIcon className='text-taxi-500 w-5 h-5 flex-shrink-0'/>
                  <span>{t('Top.advantages.third')}</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact"
                   className="inline-flex
                   items-center
                   justify-center
                   gap-2 bg-taxi-500
                   text-uber-900 px-8 py-4
                   rounded-xl font-bold text-lg
                   hover:bg-taxi-400 transition-all
                   hover:scale-105 shadow-lg shadow-taxi-500/30"
                >
                  {t('Top.get_started_today')}
                  <ArrowRightIcon className='w-5 h-5'/>
                </Link>
                <a href="tel:+12123145555"
                   className="inline-flex
                       items-center justify-center
                       gap-2 bg-white/10 text-white
                       px-8 py-4 rounded-xl font-semibold
                       text-lg hover:bg-white/20 transition-colors
                       border border-white/20"
                >
                  <PhoneIcon className='w-5 h-5'/>
                  {t('Top.call_now')}
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                  <div className="relative">
                    <img alt="NYC Taxi and Rideshare"
                         className="w-full h-72 object-cover rounded-2xl"
                         src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&amp;fit=crop&amp;w=600&amp;q=80"
                    />
                    <div
                      className="absolute -top-4 -right-4 bg-taxi-500 text-uber-900 px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2">
                      <CarIcon/>
                      {t('Top.tlc_approved')}
                    </div>
                    <div
                      className="absolute -bottom-4 -left-4 bg-lyft-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2">
                      <SmartphoneIcon/>
                      {t('Top.all_platforms')}
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-uber-800 rounded-xl p-4">
                      <div className="text-3xl font-bold text-taxi-500">30+</div>
                      <div className="text-gray-400 text-sm">{t('Top.years')}</div>
                    </div>
                    <div className="bg-uber-800 rounded-xl p-4">
                      <div className="text-3xl font-bold text-lyft-400">5K+</div>
                      <div className="text-gray-400 text-sm">{t('Top.drivers')}</div>
                    </div>
                    <div className="bg-uber-800 rounded-xl p-4">
                      <div className="text-3xl font-bold text-taxi-500">A+</div>
                      <div className="text-gray-400 text-sm">BBB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">

        </div>
      </section>
      <section id="insurance" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 bg-taxi-500/20 text-taxi-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <MapPinIcon className='w-4 h-4'/>
              {t('Service_Area.chip')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {
                t.rich('Service_Area.title', {
                  every: (chunks) => <span className="text-taxi-600">{chunks}</span>
                })
              }
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('Service_Area.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services(t).map(service => (
              <div
                key={`service-area-services-${service.title}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className={`bg-gradient-to-br from-${service.background.from} to-${service.background.to} p-6`}>
                  <div
                    className={`bg-${service.icon.background} text-${service.icon.text} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {service.icon.value}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="why-us" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="bg-uber-900 text-taxi-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"> Uber</span>
                <span
                  className="bg-lyft-500 text-white px-3 py-1 rounded-full text-xs font-bold">Lyft</span>
                <span
                  className="bg-taxi-500 text-uber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"> Taxi</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {
                  t.rich('Trust.title', {
                    trust: (chunks) => <span className="text-taxi-600">{chunks}</span>
                  })
                }
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t('Trust.description')}</p>
              <div className="bg-gradient-to-br from-uber-900 to-gray-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <img alt="Insurance Agent"
                       className="w-16 h-16 rounded-full object-cover border-2 border-taxi-500"
                       src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
                  <div>
                    <p className="text-gray-300 italic mb-2">{t('Trust.quote.text')}</p><p
                    className="font-semibold text-white">Sam
                    Karabelnik</p>
                    <p className="text-sm text-taxi-500">{t('Trust.quote.position')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {
                advantages(t).map(adv => (
                  <div key={`trust-advantages-${adv.title}`}
                       className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-taxi-500 to-taxi-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-taxi-500/20">
                      {adv.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{adv.title}</h3>
                      <p className="text-sm text-gray-600">{adv.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 md:py-28 bg-uber-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-taxi-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-lyft-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4"><span
              className="bg-uber-800 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"> Uber</span><span
              className="bg-lyft-500 text-white px-3 py-1 rounded-full text-xs font-bold">Lyft</span><span
              className="bg-taxi-500 text-uber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"> Taxi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.rich('Testimonials.title', {
                driver: (chunks) => <span className="text-taxi-500">{chunks}</span>
              })}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t('Testimonials.description')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative border border-gray-700">
              <QuoteIcon className='absolute top-6 right-6 w-10 h-10 text-gray-700'/>
              <span
                className="inline-block bg-uber-900 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">Uber</span>
              <div className="flex gap-1 mb-4">
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">"They saved me $200/month on my Uber
                insurance! The team was incredibly helpful and got me covered the same day. Highly recommend to all
                rideshare drivers."</p>
              <div className="flex items-center gap-4">
                <img alt="Mohammed R."
                     className="w-12 h-12 rounded-full object-cover border-2 border-taxi-500"
                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
                <div>
                  <p className="font-semibold text-white">Mohammed R.</p>
                  <p className="text-sm text-gray-400">Uber
                    Driver, 4 years</p>
                </div>
              </div>
            </div>
            <div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative border border-gray-700">
              <QuoteIcon className='absolute top-6 right-6 w-10 h-10 text-gray-700'/>
              <span
                className="inline-block bg-lyft-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">Lyft</span>
              <div className="flex gap-1 mb-4">
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">"After my accident, they handled
                everything. The claims process was smooth and I was back on the road in no time. Best insurance broker
                in NYC!"</p>
              <div className="flex items-center gap-4">
                <img alt="Maria G."
                     className="w-12 h-12 rounded-full object-cover border-2 border-taxi-500"
                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
                <div>
                  <p className="font-semibold text-white">Maria G.</p>
                  <p className="text-sm text-gray-400">Lyft &amp; Uber Driver</p>
                </div>
              </div>
            </div>
            <div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 relative border border-gray-700">
              <QuoteIcon className='absolute top-6 right-6 w-10 h-10 text-gray-700'/>
              <span className="inline-block bg-taxi-500 text-uber-900 px-3 py-1 rounded-full text-xs font-bold mb-4">Yellow Taxi</span>
              <div className="flex gap-1 mb-4">
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
                <StarIcon className='fill-taxi-500 text-taxi-500 w-5 h-5'/>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">"I've been with them for 8 years now. They
                always find me the best rates and their customer service is outstanding. A+ experience every time."</p>
              <div className="flex items-center gap-4">
                <img alt="Rajesh P."
                     className="w-12 h-12 rounded-full object-cover border-2 border-taxi-500"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
                <div>
                  <p className="font-semibold text-white">Rajesh P.</p>
                  <p className="text-sm text-gray-400">Yellow
                    Taxi Owner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <div
              className="inline-flex flex-wrap justify-center items-center gap-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl px-8 py-6 border border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-taxi-500">4.9</div>
                <div className="text-sm text-gray-400">{t('Testimonials.statistics.google_rating')}</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lyft-400">500+</div>
                <div className="text-sm text-gray-400">{t('Testimonials.statistics.reviews')}</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-taxi-500">98%</div>
                <div className="text-sm text-gray-400">{t('Testimonials.statistics.renewal_rate')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.rich('Contact.title', {
                touch: (chunks) => <span className="text-taxi-600">{chunks}</span>
              })}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('Contact.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts(t).map(contact => (
              <div key={`contacts-contact-item-${contact.title}`}
                   className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center">
                <div
                  className={`w-12 h-12 bg-${contact.icon.background} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {contact.icon.value}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                {contact.href ?
                  <a href={contact.href} className={`text-${contact.content.style} font-semibold hover:underline`}>
                    {contact.content.value}
                  </a> : <p className={`text-${contact.content.style} font-semibold`}>
                    {contact.content.value}
                  </p>}
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-br from-uber-900 to-gray-800 rounded-2xl p-8 text-center">
            <CircleHelpIcon className='w-12 h-12 text-taxi-500 mx-auto mb-4'/>
            <h3 className="text-xl font-bold text-white mb-2">{t('Contact.question')}</h3>
            <p className="text-gray-300 mb-6">{t('Contact.question_description')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/insurance"
                 className="inline-flex items-center gap-2 bg-taxi-500 text-uber-900 px-6 py-3 rounded-xl font-bold hover:bg-taxi-400 transition-colors">Get
                Started</a>
              <a href="tel:+12123145555"
                 className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20">
                <PhoneIcon/>
                (212) 314-5555</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
