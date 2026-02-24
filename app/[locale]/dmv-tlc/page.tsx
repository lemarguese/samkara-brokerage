"use client"

import { useTranslations } from "next-intl";
import Input from "@/components/manual/Input/Input";
import Selector from "@/components/manual/Selector/Selector";
import { dmvOrTlcSelectorOptions, REGEXES } from "@/lib/utils";
import Textarea from "@/components/manual/Textarea/Textarea";
import { Button } from "@/components/ui/button";
import { BaseSyntheticEvent, useState } from "react";
import { IServiceForm } from "@/types/form";
import { Spinner } from "@/components/ui/spinner";

export default function ServicesPage () {
  const [loading, setLoading] = useState(false);
  const t = useTranslations('DMV_TLC');

  const [serviceForm, setServiceForm] = useState<IServiceForm>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceType: '',
    tlcLicenseNumber: '',
    dmvLicenseNumber: ''
  });

  const changeInput = (key: keyof IServiceForm) => {
    return (val: BaseSyntheticEvent) => {
      setServiceForm(prev => ({
        ...prev,
        [key]: val.target.value
      }))
    }
  }

  const changeSelector = (value: string) => {
    setServiceForm(prev => ({
      ...prev,
      serviceType: value
    }))
  }

  async function sendServiceRequest () {
    setLoading(true);

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/email/full-coverage-request`, {
      method: 'POST',
      body: serviceForm,
      headers: {
        'X-Tenant-ID': 'localhost'
      }
    });

    setServiceForm({
      fullName: '',
      email: '',
      phoneNumber: '',
      dmvLicenseNumber: '',
      tlcLicenseNumber: '',
      serviceType: ''
    });

    setLoading(false);
  }

  const serviceFormValid = {
    fullName: serviceForm.fullName.trim() !== '',
    phoneNumber: REGEXES.US_PHONE.test(serviceForm.phoneNumber.trim()),
    email: REGEXES.EMAIL.test(serviceForm.email.trim()),
    dmvLicenseNumber: serviceForm.dmvLicenseNumber.trim() !== '',
    tlcLicenseNumber: serviceForm.tlcLicenseNumber.trim() !== '',
    serviceType: !!serviceForm.serviceType,
  }

  const serviceSubmitButtonDisabled = Object.values(serviceFormValid).every(e => e);

  return <div className="pt-20 md:pt-24">
    <section id="dmv-tlc" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div>
              <h3 className="font-bold text-blue-900 mb-2">{t('notice.title')}</h3>
              <p className="text-sm text-blue-800 leading-relaxed">{t('notice.description')}</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
            {t('chip')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {
              t.rich('title', {
                services: (chunks) => <span className="text-taxi-600">{chunks}</span>
              })
            }
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('description')}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"><h3
            className="text-xl font-bold text-gray-900 mb-6">{t('services.title')}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC Driver License Applications &amp; Renewals</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC Vehicle Licensing &amp; Plate Transfers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Base Affiliation &amp; Transfers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC Insurance Services (FH-1, Certificates)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC Summons Assistance &amp; Violation Disputes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC License Reinstatement Assistance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC Vehicle Permit Renewals</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Wheelchair-Accessible Vehicle (WAV) Licensing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Drug Test &amp; Defensive Driving Registration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Fingerprinting &amp; Background Check Assistance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC Inspection &amp; Compliance Guidance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Vehicle Registration &amp; Title Services</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">License Plate Issuance &amp; Surrender</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Registration Renewals &amp; Duplicates</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Title Transfers &amp; Corrections</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Duplicate Title Requests</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Out-of-State Title Transfers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Commercial &amp; Fleet Registration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Custom &amp; Specialty Plates</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Insurance Compliance Assistance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Address &amp; Name Changes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">VIN Verification &amp; Corrections</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Expedited DMV Transactions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">TLC Plates from Scratch</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-taxi-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-700">Vehicle Conversion to Wheelchair Accessible</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"><h3
            className="text-xl font-bold text-gray-900 mb-6">{t('form.title')}</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input label={t('form.full_name')} placeholder='John Doe' value={serviceForm.fullName}
                       onChange={changeInput('fullName')} valid={serviceFormValid.fullName}/>
                <Input label={t('form.phone_number')} placeholder="(212) 555-0000"
                       onChange={changeInput('phoneNumber')} valid={serviceFormValid.phoneNumber}
                       value={serviceForm.phoneNumber}/>
                <Input label={t('form.email')} placeholder="john@example.com" valid={serviceFormValid.email}
                       value={serviceForm.email}
                       onChange={changeInput('email')}/>
                <Selector label={t('form.service_type')} onValueChange={changeSelector}
                          value={serviceForm.serviceType}
                          valid={serviceFormValid.serviceType}
                          options={dmvOrTlcSelectorOptions}
                          error='Please choose the service'/>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input valid={serviceFormValid.tlcLicenseNumber} label={t('form.tlc_license_number')}
                       value={serviceForm.tlcLicenseNumber} placeholder="123456"
                       onChange={changeInput('tlcLicenseNumber')}/>
                <Input valid={serviceFormValid.dmvLicenseNumber} label={t('form.dmv_license_number')}
                       value={serviceForm.dmvLicenseNumber}
                       placeholder="123-456-789"
                       onChange={changeInput('dmvLicenseNumber')}/>
              </div>
              <Textarea value={serviceForm.additionalDetails} label={t('form.additional_details')}
                        onChange={changeInput('additionalDetails')}/>
              <Button onClick={sendServiceRequest} disabled={!serviceSubmitButtonDisabled || loading}
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? <Spinner data-icon="inline-start"/> : null}
                {t('form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
}

