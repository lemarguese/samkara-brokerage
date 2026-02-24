"use client"

import { TriangleAlertIcon, UploadIcon } from "lucide-react";
import Input from "@/components/manual/Input/Input";
import { DatePicker } from "@/components/manual/DatePicker/DatePicker";
import Selector from "@/components/manual/Selector/Selector";
import Textarea from "@/components/manual/Textarea/Textarea";
import { BaseSyntheticEvent, FormEvent, memo, useCallback, useMemo, useState } from "react";
import { IClaimForm } from "@/types/form";
import { REGEXES } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { useTranslations } from "next-intl";

function ClaimsTab () {
  const t = useTranslations('Insurance.forms.claims');
  const [loading, setLoading] = useState(false);
  const [claimForm, setClaimForm] = useState<IClaimForm>({
    fullName: '',
    email: '',
    incidentDate: '',
    incidentDescription: '',
    incidentType: '',
    phoneNumber: '',
    policyNumber: ''
  });

  const changeInput = useCallback((key: keyof Omit<IClaimForm, 'policeReport' | 'pictureOrVideo' | 'otherDocument' | 'incidentDate' | 'incidentType'>) => {
    return (val: BaseSyntheticEvent) => {
      setClaimForm(prev => ({
        ...prev,
        [key]: val.target.value
      }))
    }
  }, []);

  const changeDate = useCallback((value: string | BaseSyntheticEvent) => {
    setClaimForm(prev => ({
      ...prev,
      incidentDate: typeof value === 'string' ? value : value.target.value
    }))
  }, []);

  const changeSelector = useCallback((value: string) => {
    setClaimForm(prev => ({
      ...prev,
      incidentType: value
    }))
  }, []);

  const changeFile = useCallback((key: keyof Pick<IClaimForm, 'otherDocument' | 'policeReport' | 'pictureOrVideo'>) => {
    return (value: BaseSyntheticEvent) => {
      const [file] = value.target.files;
      setClaimForm(prev => ({
        ...prev,
        [key]: file
      }))
    }
  }, []);

  async function sendBrokerChangeRequest (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    for (const [key, value] of Object.entries(claimForm)) {
      if (value instanceof Blob) {
        formData.append('documents', value)
        continue;
      }
      formData.append(key, value)
    }

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/email/claim-request`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Tenant-ID': 'localhost'
      }
    });

    setClaimForm({
      fullName: '',
      email: '',
      incidentDate: '',
      incidentDescription: '',
      incidentType: '',
      phoneNumber: '',
      policyNumber: ''
    });

    setLoading(false);
  }

  const claimFormValid = useMemo(() => ({
    fullName: claimForm.fullName.trim() !== '',
    email: REGEXES.EMAIL.test(claimForm.email.trim()),
    incidentDate: !!claimForm.incidentDate,
    incidentType: !!claimForm.incidentType,
    policyNumber: !!claimForm.policyNumber,
    phoneNumber: REGEXES.US_PHONE.test(claimForm.phoneNumber.trim()),
    pictureOrVideo: !!claimForm.pictureOrVideo,
    policeReport: !!claimForm.policeReport,
    incidentDescription: claimForm.incidentDescription.trim() !== ''
  }), [claimForm]);

  const claimButtonDisabled = useMemo(() => Object.values(claimFormValid).every(e => e), [claimFormValid]);

  return <form onSubmit={sendBrokerChangeRequest} className='flex flex-col gap-4 justify-between'>
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-2">
      <p className="text-sm text-orange-800 flex items-center gap-2">
        <TriangleAlertIcon className='w-5 h-5 flex-shrink-0'/>
        <span>
            <strong>For emergencies,</strong> please call us at
            <a href="tel:+12123145555" className="ml-2 font-bold underline">
              (212) 314-5555
            </a>
          </span>
      </p>
    </div>
    <div className="flex flex-col gap-4">
      <div className='flex items-center gap-4'>
        <Input label={t('full_name')} valid={claimFormValid.fullName} value={claimForm.fullName}
               onChange={changeInput('fullName')} placeholder='John Doe'
               key='claims-full-name-input'/>
        <Input label={t('phone_number')} valid={claimFormValid.phoneNumber} value={claimForm.phoneNumber}
               onChange={changeInput('phoneNumber')}
               placeholder='(212) 555-0000' key='claims-phone-number-input'/>
      </div>
      <div className='flex items-center gap-4'>
        <Input label={t('email')} valid={claimFormValid.email} value={claimForm.email}
               onChange={changeInput('email')}
               placeholder='john@example.com' key='claims-email-address-input'/>
        <Input label={t('policy_number')} valid={claimFormValid.policyNumber} value={claimForm.policyNumber}
               onChange={changeInput('policyNumber')}
               placeholder='POL-12345678' key='claims-policy-number-input'/>
      </div>
      <div className='flex items-center gap-4'>
        <DatePicker valid={claimFormValid.incidentDate} value={claimForm.incidentDate} onChange={changeDate}
                    label={t('incident_date')}
                    key='claims-incident-date-input'/>
        <Selector value={claimForm.incidentType} onValueChange={changeSelector} valid={claimFormValid.incidentType}
                  label={t('incident_type')}
                  options={[
                    { key: 'collision-accident', name: 'Collision / Accident', value: 'collision-accident' },
                    { key: 'property-damage', name: 'Property Damage', value: 'property-damage' },
                    { key: 'personal-injury', name: 'Personal Injury', value: 'personal-injury' },
                    { key: 'theft-vandalism', name: 'Theft / Vandalism', value: 'theft-vandalism' },
                    { key: 'glass-windshield', name: 'Glass / Windshield', value: 'glass-windshield' },
                    { key: 'roadside-assistance', name: 'Roadside Assistance', value: 'roadside-assistance' },
                    { key: 'other', name: 'Other', value: 'other' }
                  ]} error='Please select the incident type'/>
      </div>
      <Textarea label={t('incident_description')} valid={claimFormValid.incidentDescription}
                value={claimForm.incidentDescription}
                onChange={changeInput('incidentDescription')} key='claims-description-incident-textarea'
                placeholder='Please describe what happened, including location, time, and any other relevant details...'/>
    </div>
    <div className="border-t border-gray-200 pt-5">
      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
        <UploadIcon className='w-4 h-4 text-orange-500'/>
        {t('documents.title')}
      </h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input onChange={changeFile('otherDocument')} label={t('documents.other')}
               className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-gray-50 transition-colors cursor-pointer'
               key='claims-other-documents-input' type='file'/>
        <Input valid={claimFormValid.pictureOrVideo} onChange={changeFile('pictureOrVideo')}
               label={t('documents.pictures_or_video')}
               className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-gray-50 transition-colors cursor-pointer'
               key='claims-pictures-or-video-input' type='file'/>
        <Input valid={claimFormValid.policeReport} onChange={changeFile('policeReport')}
               label={t('documents.police_report')}
               className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-gray-50 transition-colors cursor-pointer'
               key='claims-police-report-input' type='file'/>
      </div>
    </div>
    <button type="submit"
            disabled={loading || !claimButtonDisabled}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30">
      {loading ? <Spinner data-icon="inline-start"/> : <TriangleAlertIcon className='w-5 h-5'/>}
      {t('submit')}
    </button>
  </form>
}

export default memo(ClaimsTab);
