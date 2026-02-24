"use client"

import { ShieldIcon, UploadIcon } from "lucide-react";
import Input from "@/components/manual/Input/Input";
import Textarea from "@/components/manual/Textarea/Textarea";
import { Button } from "@/components/ui/button";
import { BaseSyntheticEvent, FormEvent, useState } from "react";
import { IFullCoverageForm } from "@/types/form";
import { REGEXES } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { useTranslations } from "next-intl";

export default function FullCoverageTab () {
  const t = useTranslations('Insurance.forms.full_coverage');
  const [loading, setLoading] = useState(false);
  const [fullCoverageForm, setFullCoverageForm] = useState<IFullCoverageForm>({
    fullName: '',
    email: '',
    phoneNumber: '',
    liabilityPolicyNumber: '',
    coverageAmountNeeded: '',
  });

  const changeInput = (key: keyof Omit<IFullCoverageForm, 'billOfSale'>) => {
    return (value: BaseSyntheticEvent) => {
      setFullCoverageForm(prev => ({
        ...prev,
        [key]: value.target.value
      }))
    }
  };

  const changeFile = (value: BaseSyntheticEvent) => {
    const [file] = value.target.files;
    setFullCoverageForm(prev => ({
      ...prev,
      billOfSale: file
    }))
  }

  async function sendFullCoverageRequest (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    for (const [key, value] of Object.entries(fullCoverageForm)) {
      if (value instanceof Blob) {
        formData.append('document', value)
        continue;
      }
      formData.append(key, value)
    }

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/email/full-coverage-request`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Tenant-ID': 'samkara'
      }
    });

    setFullCoverageForm({
      fullName: '',
      email: '',
      phoneNumber: '',
      liabilityPolicyNumber: '',
      coverageAmountNeeded: '',
    });

    setLoading(false);
  }

  const fullCoverageFormValid = {
    fullName: fullCoverageForm.fullName.trim() !== '',
    phoneNumber: REGEXES.US_PHONE.test(fullCoverageForm.phoneNumber.trim()),
    email: REGEXES.EMAIL.test(fullCoverageForm.email.trim()),
    liabilityPolicyNumber: fullCoverageForm.liabilityPolicyNumber.trim() !== '',
    coverageAmountNeeded: fullCoverageForm.coverageAmountNeeded.trim() !== '',
    billOfSale: !!fullCoverageForm.billOfSale,
  }

  const fullCoverageSubmitButtonDisabled = Object.values(fullCoverageFormValid).every(e => e);

  return <form onSubmit={sendFullCoverageRequest} className="space-y-5">
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-2">
      <p className="text-sm text-green-800 flex items-start gap-2">
        <ShieldIcon className='w-5 h-5 flex-shrink-0'/>
        <span>
          <strong>Full coverage</strong> includes liability, collision, comprehensive, and more.
          Get maximum protection for your vehicle.
        </span>
      </p>
    </div>
    <div className="grid sm:grid-cols-2 gap-5">
      <Input value={fullCoverageForm.fullName} valid={fullCoverageFormValid.fullName} onChange={changeInput('fullName')}
             label={t('full_name')}
             placeholder='John Doe' key='claims-full-name-input'/>
      <Input value={fullCoverageForm.phoneNumber}
             valid={fullCoverageFormValid.phoneNumber}
             onChange={changeInput('phoneNumber')}
             label={t('phone_number')}
             placeholder='(212) 555-0000'
             key='claims-phone-number-input'/>
    </div>
    <Input value={fullCoverageForm.email} valid={fullCoverageFormValid.email} onChange={changeInput('email')}
           label={t('email')}
           placeholder='john@example.com' key='claims-email-address-input'/>
    <div className="border-t border-gray-200 pt-5">
      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
        <ShieldIcon className='w-4 h-4 text-green-600'/>
        {t('policy.title')}
      </h4>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input valid={fullCoverageFormValid.liabilityPolicyNumber}
               value={fullCoverageForm.liabilityPolicyNumber}
               onChange={changeInput('liabilityPolicyNumber')}
               label={t('policy.liability_policy_number')}
               placeholder='POL-12345678' key='claims-liability-policy-number-input'/>
        <Input valid={fullCoverageFormValid.coverageAmountNeeded}
               value={fullCoverageForm.coverageAmountNeeded}
               onChange={changeInput('coverageAmountNeeded')}
               label={t('policy.coverage_amount')}
               placeholder='e.g., $100,000' key='claims-coverage-amount-input'/>
      </div>
    </div>
    <div className="border-t border-gray-200 pt-5">
      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
        <UploadIcon className='w-4 h-4 text-green-600'/>
        {t('documents.title')}
      </h4>
      <Input valid={fullCoverageFormValid.billOfSale} onChange={changeFile} label={t('documents.bill_of_sale')} type='file'
             key='full-coverage-bill-of-sale-input'
             className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-green-500 hover:bg-gray-50 transition-colors cursor-pointer'/>
    </div>
    <Textarea value={fullCoverageForm.additionalDetails} onChange={changeInput('additionalDetails')}
              label={t('additional_details')}
              key='full-coverage-additional-details-textarea'
              placeholder='Any specific coverage requirements or questions...'/>
    <Button
      disabled={!fullCoverageSubmitButtonDisabled || loading}
      className='w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30'>
      {loading ? <Spinner data-icon="inline-start"/> : <ShieldIcon className='w-5 h-5'/>}
      {t('submit')}
    </Button>
  </form>
}
