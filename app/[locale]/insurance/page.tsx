"use client"

import {
  CarIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SmartphoneIcon
} from "lucide-react";
import RequestTabs from "@/app/[locale]/insurance/components/RequestTabs/RequestTabs";
import { Link } from "@/locale/navigation";
import createTranslator from "use-intl/dist/types/core/createTranslator";
import { Messages } from "use-intl/dist/types/core/AppConfig";
import { useTranslations } from "next-intl";

const contacts = (t: ReturnType<typeof createTranslator<Messages, any>>) => [
  {
    icon: {
      value: <PhoneIcon className='w-5 h-5 text-uber-900'/>,
      background: 'taxi-500'
    },
    title: t('contact.list.phone'),
    content: {
      value: '(212) 314-5555',
      style: 'taxi-600'
    },
    href: 'tel:+12123145555'
  },
  {
    icon: {
      value: <MailIcon className='w-5 h-5 text-white'/>,
      background: 'lyft-500'
    },
    title: t('contact.list.email'),
    content: {
      value: 'info@samkarabrokerage.com',
      style: 'lyft-500'
    },
    href: 'mailto:info@samkarabrokerage.com'
  },
  {
    icon: {
      value: <MapPinIcon className='w-5 h-5 text-taxi-500'/>,
      background: 'uber-900'
    },
    title: t('contact.list.office'),
    content: {
      value: '4710 32nd Place, Long Island City, NY 11101',
      style: 'gray-600'
    },
    href: undefined
  },
  {
    icon: {
      value: <ClockIcon className='w-5 h-5 text-white'/>,
      background: 'green-600'
    },
    title: t('contact.list.hours'),
    content: {
      value: 'Mon-Fri: 9am - 5pm, Sat: Closed',
      style: 'gray-600'
    },
    href: undefined
  }
];

export default function InsurancePage () {
  const t = useTranslations('Insurance');

  return <section className="pt-20 md:pt-28 pb-20 md:pb-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className="bg-uber-900 text-taxi-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <SmartphoneIcon className='w-3 h-3'/>
          Uber</span>
          <span
            className="bg-lyft-500 text-white px-3 py-1 rounded-full text-xs font-bold">Lyft</span>
          <span
            className="bg-taxi-500 text-uber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <CarIcon className='w-3 h-3'/>
            Taxi
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t.rich('title', {
            help: (chunks) => <span className="text-taxi-600">{chunks}</span>
          })}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"><h3
            className="font-bold text-gray-900 mb-4">{t('contact.title')}</h3>
            <div className="space-y-4">
              {contacts(t).map(contact => (
                <div key={`insurance-page-contact-item-${contact.title}`} className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 bg-${contact.icon.background} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {contact.icon.value}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{contact.title}</p>
                    {contact.href ? <a href={contact.href}
                                       className={`font-semibold text-gray-900 hover:text-${contact.content.style}`}>{contact.content.value}</a>
                      : <p className={`font-semibold text-${contact.content.style}`}>{contact.content.value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-uber-900 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <CarIcon className='w-5 h-5 text-taxi-500'/>
              {t('vehicle_cover')}
            </h3>
            <div className="space-y-2">
              <Link href="/black-car"
                    className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Black
                  Car
                </div>
              </Link>
              <Link href="/car-service"
                    className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Car
                  Service
                </div>
              </Link>
              <Link href="/livery"
                    className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Livery
                </div>
              </Link>
              <Link href="/yellow-cab"
                    className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Yellow
                  Cab
                </div>
              </Link>
              <Link href="/ambulette"
                    className="block bg-uber-800 rounded-lg px-4 py-2 text-gray-300 hover:bg-taxi-500 hover:text-uber-900 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-taxi-500 rounded-full"></span>Ambulette
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <RequestTabs/>
        </div>
      </div>
    </div>
  </section>
}
