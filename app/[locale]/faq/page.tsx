"use client"

import { Link } from "@/locale/navigation";
import {
  BuildingIcon,
  CarIcon,
  CircleHelpIcon,
  ClockIcon,
  DollarSignIcon,
  FileTextIcon,
  HelpCircleIcon, PhoneIcon,
  ShieldIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMemo, useState } from "react";
import createTranslator from "use-intl/dist/types/core/createTranslator";
import { Messages } from "use-intl/dist/types/core/AppConfig";
import { useTranslations } from "next-intl";

const meta = [
  { area: 'insurance', key: 'tlc_insurance_definition' },
  { area: 'insurance', key: 'vehicle_types_insured' },
  { area: 'coverage', key: 'liability_vs_full_coverage' },
  { area: 'coverage', key: 'minimum_requirements' },
  { area: 'pricing', key: 'insurance_cost' },
  { area: 'pricing', key: 'payment_plans' },
  { area: 'process', key: 'insurance_timeframe' },
  { area: 'process', key: 'documents_required' },
  { area: 'broker_change', key: 'switching_broker' },
  { area: 'broker_change', key: 'saving_money_switching' },
  { area: 'claims', key: 'accident_procedure' },
  { area: 'dmv_tlc', key: 'tlc_license_renewal_help' }
];

const faqs = (t: ReturnType<typeof createTranslator<Messages, any>>) => meta.map((item, i) => ({
  ...item,
  question: t(`questions_answers.${i}.question`),
  answer: t(`questions_answers.${i}.answer`)
}));

const filters = (t: ReturnType<typeof createTranslator<Messages, any>>) => [
  {
    icon: undefined,
    key: 'all',
    label: t('tabs.all')
  },
  {
    key: 'insurance',
    label: t('tabs.insurance'),
    icon: <ShieldIcon className="w-4 h-4"/>
  },
  {
    key: 'coverage',
    label: t('tabs.coverage'),
    icon: <CarIcon className="w-4 h-4"/>
  },
  {
    key: 'pricing',
    label: t('tabs.pricing'),
    icon: <DollarSignIcon className="w-4 h-4"/>
  },
  {
    key: 'process',
    label: t('tabs.process'),
    icon: <ClockIcon className="w-4 h-4"/>
  },
  {
    key: 'broker_change',
    label: t('tabs.broker_change'),
    icon: <FileTextIcon className="w-4 h-4"/>
  },
  {
    key: 'claims',
    label: t('tabs.claims'),
    icon: <CircleHelpIcon className="w-4 h-4"/>
  },
  {
    key: 'dmv_tlc',
    label: t('tabs.dmv_tlc'),
    icon: <BuildingIcon className="w-4 h-4"/>
  }
];

export default function FAQPage () {
  const t = useTranslations('FAQ');
  const [filter, setFilter] = useState('all');

  const filteredFaqs = useMemo(() => faqs(t).filter(f => {
    if (filter === 'all') return f;
    else {
      if (f.area === filter) return f;
    }
  }), [t, filter])

  const changeFilter = (value: string) => () => {
    setFilter(value)
  }

  return <div className="pt-20 md:pt-24">
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 bg-uber-900 text-taxi-500 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <HelpCircleIcon className='w-4 h-4'/>
            {t('chip')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.rich('title', {
              question: (chunks) => <span className="text-taxi-600">{chunks}</span>
            })}
          </h2>
          <p className="text-lg text-gray-600">{t('description')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters(t).map((item) => (
            <Button
              key={item.key}
              onClick={changeFilter(item.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5
                ${filter === item.key
                ? 'bg-uber-900 text-taxi-500'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            defaultValue="tlc_insurance_definition"
            className="w-full"
          >
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={`faq-page-accordion-item-${index}`} value={faq.key}>
                <AccordionTrigger>
                  <div className='flex items-center gap-4'>
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 bg-taxi-500 text-uber-900 rounded-lg text-sm font-bold flex-shrink-0">Q</span>
                    <p className='font-semibold text-gray-900 text-[16px]'>{faq.question}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='flex gap-4 text-[16px]'>
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 bg-uber-900 text-taxi-500 rounded-lg text-sm font-bold flex-shrink-0">A</span>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 bg-gradient-to-br from-uber-900 to-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">{t('contact.title')}</h3>
          <p className="text-gray-300 mb-6">{t('contact.description')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+12123145555"
               className="inline-flex items-center gap-2 bg-taxi-500 text-uber-900 px-6 py-3 rounded-xl font-bold hover:bg-taxi-400 transition-colors">
              <PhoneIcon className='w-5 h-5'/>
              (212) 314-5555
            </a>
            <Link href="/#contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/20">{t('contact.send')}</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
}
