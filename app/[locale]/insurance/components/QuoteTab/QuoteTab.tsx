"use client"

import Input from "@/components/manual/Input/Input";
import { SendIcon } from "lucide-react";
import Selector from "@/components/manual/Selector/Selector";
import Textarea from "@/components/manual/Textarea/Textarea";
import { Button } from "@/components/ui/button";
import { BaseSyntheticEvent, FormEvent, memo, useCallback, useMemo, useState } from "react";
import { IQuoteForm } from "@/types/form";
import { REGEXES } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import createTranslator from "use-intl/dist/types/core/createTranslator";
import { Messages } from "use-intl/dist/types/core/AppConfig";
import { useTranslations } from "next-intl";

function QuoteTab () {
  const t = useTranslations('Insurance.forms.quote');

  const [loading, setLoading] = useState(false);
  const [quoteForm, setQuoteForm] = useState<IQuoteForm>({
    fullName: '',
    phoneNumber: '',
    email: '',
    policyType: '',
    additionalDetails: '',
  });

  const changeTextInputs = useCallback((key: keyof Pick<IQuoteForm, 'fullName' | 'phoneNumber' | 'email' | 'additionalDetails'>) => {
    return (value: BaseSyntheticEvent) => {
      setQuoteForm(prev => ({
        ...prev,
        [key]: value.target.value
      }))
    }
  }, []);

  const changeSelector = useCallback((value: string) => {
    setQuoteForm(prev => ({
      ...prev,
      policyType: value
    }))
  }, []);

  const changeFileInputs = useCallback((key: keyof Pick<IQuoteForm, 'driverLicense' | 'fh1' | 'proofOfAddress' | 'vehicleRegistration' | 'billOfSale' | 'tlcLicense'>) => {
    return (value: BaseSyntheticEvent) => {
      const [file] = value.target.files;
      setQuoteForm(prev => ({
        ...prev,
        [key]: file
      }))
    }
  }, []);

  async function sendQuoteRequest (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    for (const [key, value] of Object.entries(quoteForm)) {
      if (value instanceof Blob) {
        formData.append('documents', value)
        continue;
      }
      formData.append(key, value)
    }

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/email/quote-request`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Tenant-ID': 'samkara'
      }
    });

    setQuoteForm({
      fullName: '',
      phoneNumber: '',
      email: '',
      policyType: '',
      additionalDetails: '',
    });

    setLoading(false);
  }

  const quoteFormValid = useMemo(() => ({
    fullName: quoteForm.fullName.trim() !== '',
    phoneNumber: REGEXES.US_PHONE.test(
      quoteForm.phoneNumber.trim()
    ),
    email: REGEXES.EMAIL.test(
      quoteForm.email.trim()
    ),
    policyType: !!quoteForm.policyType,
  }), [quoteForm]);

  const quoteSubmitButtonDisabled = useMemo(() => Object.values(quoteFormValid).every(e => e), [quoteFormValid])

  return <form onSubmit={sendQuoteRequest} className='flex flex-col gap-4 justify-between'>
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <Input valid={quoteFormValid.fullName} key='quote-tab-full-name-input' value={quoteForm.fullName}
               onChange={changeTextInputs('fullName')}
               label={t('full_name')}
               placeholder='John Doe' required/>
        <Input valid={quoteFormValid.phoneNumber} key='quote-tab-phone-number-input' value={quoteForm.phoneNumber}
               onChange={changeTextInputs('phoneNumber')} label={t('phone_number')}
               placeholder='(212) 555-0000'
               required/>
      </div>
      <Input valid={quoteFormValid.email} key='quote-tab-email-address-input' value={quoteForm.email}
             onChange={changeTextInputs('email')}
             label={t('email')}
             placeholder='(212) 555-0000'
             required/>
      <Selector valid={quoteFormValid.policyType} onValueChange={changeSelector} value={quoteForm.policyType}
                label={t('policy_type')}
                error='Please select the policy type' options={[
        { key: 'tlc-insurance', name: 'TLC Insurance', value: 'tlc-insurance' },
        { key: 'tlc-full-coverage', name: 'TLC Full Coverage', value: 'tlc-full-coverage' },
        {
          key: 'workers-compensation-insurance',
          name: 'Workers Compensation Insurance',
          value: 'workers-compensation-insurance'
        },
        {
          key: 'general-liability-insurance',
          name: 'General Liability Insurance',
          value: 'general-liability-insurance'
        },
        { key: 'cyber-liability-insurance', name: 'Cyber Liability Insurance', value: 'cyber-liability-insurance' },
        { key: 'cargo-insurance', name: 'Cargo Insurance', value: 'cargo-insurance' },
        { key: 'homeowners-insurance', name: 'Homeowners Insurance', value: 'homeowners-insurance' },
        { key: 'commercial-auto', name: 'Commercial Auto', value: 'commercial-auto' },
        { key: 'business-insurance', name: 'Business Insurance', value: 'business-insurance' },
        { key: 'surety-bond', name: 'Surety Bond', value: 'surety-bond' }
      ]} required/>
      {
        quoteForm.policyType === 'tlc-insurance' ? <div className='grid grid-cols-2 grid-rows-3 gap-6'>
          <Input type='file'
                 onChange={changeFileInputs('driverLicense')}
                 className='border-2 border-dashed border-gray-300 rounded-xl hover:border-taxi-500 hover:bg-gray-50 transition-colors cursor-pointer'
                 label={t('documents.driver_license')} key='quote-driver-license-input'/>
          <Input type='file'
                 onChange={changeFileInputs('tlcLicense')}
                 className='border-2 border-dashed border-gray-300 rounded-xl hover:border-taxi-500 hover:bg-gray-50 transition-colors cursor-pointer'
                 label={t('documents.tlc_license')} key='quote-tlc-license-input'/>
          <Input type='file'
                 onChange={changeFileInputs('fh1')}
                 className='border-2 border-dashed border-gray-300 rounded-xl hover:border-taxi-500 hover:bg-gray-50 transition-colors cursor-pointer'
                 label={t('documents.current_fh1')} key='quote-fh1-input'/>
          <Input type='file'
                 onChange={changeFileInputs('vehicleRegistration')}
                 className='border-2 border-dashed border-gray-300 rounded-xl hover:border-taxi-500 hover:bg-gray-50 transition-colors cursor-pointer'
                 label={t('documents.vehicle_registration')} key='quote-vehicle-registration-input'/>
          <Input type='file'
                 onChange={changeFileInputs('billOfSale')}
                 className='border-2 border-dashed border-gray-300 rounded-xl hover:border-taxi-500 hover:bg-gray-50 transition-colors cursor-pointer'
                 label={t('documents.bill_of_sale')} key='quote-bill-of-sale-input'/>
          <Input type='file'
                 onChange={changeFileInputs('proofOfAddress')}
                 className='border-2 border-dashed border-gray-300 rounded-xl hover:border-taxi-500 hover:bg-gray-50 transition-colors cursor-pointer'
                 label={t('documents.proof_of_address')} key='quote-proof-of-address-input'/>
        </div> : null
      }
      <Textarea
        key='quote-tab-textarea'
        label={t('additional_details')}
        value={quoteForm.additionalDetails}
        onChange={changeTextInputs('additionalDetails')}
        rows="3"
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors resize-none"
        placeholder="Please shortly describe do you have additional drivers to add or any other questions"/>
      <Input key='quote-tab-electronic-signature-input' label='Electronic Signature' placeholder='(212) 555-0000'
             required/>
    </div>
    <Button type="submit" disabled={!quoteSubmitButtonDisabled || loading}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-taxi-500 text-uber-900 hover:bg-taxi-400 shadow-lg shadow-taxi-500/30">
      {loading ? <Spinner data-icon="inline-start"/> : <SendIcon className='w-5 h-5'/>}
      {t('submit')}
    </Button>
  </form>
}

export default memo(QuoteTab);
