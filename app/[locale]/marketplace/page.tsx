"use client"

import { PlusIcon, ShieldAlertIcon, StoreIcon } from "lucide-react";
import Input from "@/components/manual/Input/Input";
import Selector from "@/components/manual/Selector/Selector";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const categories = [
  { key: 'all', value: 'all', name: 'All Categories' },
  { key: 'tlc_corporation_for_sale', value: 'tlc_corporation_for_sale', name: 'TLC Corporation For Sale' },
  { key: 'tlc_vehicle_for_rent', value: 'tlc_vehicle_for_rent', name: 'TLC Vehicle for Rent' },
  { key: 'tlc_plates_for_rent', value: 'tlc_plates_for_rent', name: 'TLC Plates For Rent' },
  { key: 'looking_for_driver', value: 'looking_for_driver', name: 'Looking for Driver' },
  { key: 'shift_share', value: 'shift_share', name: 'Shift Share' },
  { key: 'parts_accessories', value: 'parts_accessories', name: 'Parts & Accessories' },
  { key: 'other', value: 'other', name: 'Other' }
];

export default function MarketplacePage () {
  const t = useTranslations('Marketplace');

  return <div className="pt-20 md:pt-16">
    <section className="bg-gradient-to-br from-uber-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-taxi-500 rounded-xl flex items-center justify-center">
                <StoreIcon className='w-7 h-7 text-uber-900'/>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{t('title')}</h1></div>
            <p className="text-lg text-gray-300">{t('description')}</p></div>
          <div className="flex items-center gap-3">
            <Button
              className="flex items-center gap-2 bg-taxi-500 text-uber-900 px-6 py-3 rounded-xl font-bold hover:bg-taxi-400 transition-colors shadow-lg">
              <PlusIcon className='w-5 h-5'/>
              {t('post')}
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-orange-50 border-y border-orange-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4">
          <ShieldAlertIcon className='w-6 h-6 text-orange-600 flex-shrink-0 mt-1'/>
          <div>
            <h3 className="font-bold text-orange-900 mb-2">{t('notice.title')}</h3>
            <p className="text-sm text-orange-800 leading-relaxed">
              {t.rich('notice.description', {
                start: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Input placeholder='Search listings...'/>
              </div>
              <Selector label='' options={categories} error=''/>
            </div>
          </div>
          <div className="text-center py-20"><p className="text-gray-500 text-lg">{t('not_found')}</p></div>
        </div>
      </div>
    </section>
  </div>
}
