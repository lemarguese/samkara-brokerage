"use client"

import Input from "@/components/manual/Input/Input";
import { RefreshCwIcon, UploadIcon } from "lucide-react";
import { DatePicker } from "@/components/manual/DatePicker/DatePicker";
import { Button } from "@/components/ui/button";
import { BaseSyntheticEvent, FormEvent, memo, useCallback, useMemo, useState } from "react";
import { IBrokerChangeForm } from "@/types/form";
import { REGEXES } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

function BrokerChangeTab () {
  const [loading, setLoading] = useState(false);
  const [brokerChangeForm, setBrokerChangeForm] = useState<IBrokerChangeForm>({
    fullName: '',
    phoneNumber: '',
    email: '',
    policyExpirationDate: '',
    policyNumber: ''
  });

  const changeTextInputs = useCallback((key: keyof Pick<IBrokerChangeForm, 'fullName' | 'phoneNumber' | 'email' | 'policyNumber'>) => {
    return (value: BaseSyntheticEvent) => {
      setBrokerChangeForm(prev => ({
        ...prev,
        [key]: value.target.value
      }))
    }
  }, []);

  const changeDate = useCallback((value: string | BaseSyntheticEvent) => {
    setBrokerChangeForm(prev => ({
      ...prev,
      policyExpirationDate: typeof value === 'string' ? value : value.target.value
    }))
  }, []);

  const changeFileInputs = useCallback((key: keyof Pick<IBrokerChangeForm, 'driverLicense' | 'fh1' | 'registration'>) => {
    return (value: BaseSyntheticEvent) => {
      const [file] = value.target.files;
      setBrokerChangeForm(prev => ({
        ...prev,
        [key]: file
      }))
    }
  }, []);

  async function sendBrokerChangeRequest (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    for (const [key, value] of Object.entries(brokerChangeForm)) {
      if (value instanceof Blob) {
        formData.append('documents', value)
        continue;
      }
      formData.append(key, value)
    }

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/email/cob-request`, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Tenant-ID': 'localhost'
      }
    });

    setBrokerChangeForm({
      fullName: '',
      phoneNumber: '',
      email: '',
      policyExpirationDate: '',
      policyNumber: ''
    });

    setLoading(false);
  }

  const brokerChangeFormValid = useMemo(() => ({
    fullName: brokerChangeForm.fullName.trim() !== '',
    phoneNumber: REGEXES.US_PHONE.test(
      brokerChangeForm.phoneNumber.trim()
    ),
    email: REGEXES.EMAIL.test(
      brokerChangeForm.email.trim()
    ),
    policyNumber: !!brokerChangeForm.policyNumber,
    policyExpirationDate: !!brokerChangeForm.policyExpirationDate,
    driverLicense: !!brokerChangeForm.driverLicense,
    registration: !!brokerChangeForm.registration,
    fh1: !!brokerChangeForm.fh1
  }), [brokerChangeForm]);

  const brokerChangeSubmitButtonDisabled = useMemo(() => Object.values(brokerChangeFormValid).every(e => e), [brokerChangeFormValid]);

  return <form onSubmit={sendBrokerChangeRequest} className='flex flex-col gap-4 justify-between'>
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <Input valid={brokerChangeFormValid.fullName} key='quote-tab-full-name' value={brokerChangeForm.fullName}
               onChange={changeTextInputs('fullName')}
               label='Full Name' placeholder='John Doe' required/>
        <Input valid={brokerChangeFormValid.phoneNumber} key='quote-tab-phone-number' value={brokerChangeForm.phoneNumber}
               onChange={changeTextInputs('phoneNumber')} label='Phone Number' placeholder='(212) 555-0000'
               required/>
      </div>
      <Input valid={brokerChangeFormValid.email} key='quote-tab-email-address' value={brokerChangeForm.email}
             onChange={changeTextInputs('email')}
             label='Email Address' placeholder='(212) 555-0000'
             required/>
    </div>
    <div className='flex flex-col gap-4 border-t border-gray-200 pt-5'>
      <h4 className='text-sm font-bold text-gray-900 flex items-center gap-2'>
        <RefreshCwIcon className='w-4 h-4 text-lyft-500'/>
        Current Policy Information
      </h4>
      <div className='flex gap-4 items-center'>
        <Input valid={brokerChangeFormValid.policyNumber} key='quote-tab-policy-number' value={brokerChangeForm.policyNumber}
               onChange={changeTextInputs('policyNumber')} label='Policy Number' placeholder='(212) 555-0000'
               required/>
        <DatePicker valid={brokerChangeFormValid.policyExpirationDate} key='broker-change-policy-expiration-input'
                    value={brokerChangeForm.policyExpirationDate}
                    onChange={changeDate} label='Policy Expiration'/>
      </div>
    </div>
    <div className='flex flex-col gap-4 border-t border-gray-200 pt-5'>
      <h4 className='text-sm font-bold text-gray-900 flex items-center gap-2'>
        <UploadIcon className='w-4 h-4 text-lyft-500'/>
        Upload Required Documents
      </h4>
      <div className='grid sm:grid-cols-2 gap-4'>
        <Input valid={brokerChangeFormValid.driverLicense} type='file'
               onChange={changeFileInputs('driverLicense')}
               className='border-2 border-dashed border-gray-300 rounded-xl hover:border-lyft-500 hover:bg-gray-50 transition-colors cursor-pointer'
               label="Driver's License" key='broker-change-driver-license-input'/>
        <Input valid={brokerChangeFormValid.registration} type='file'
               onChange={changeFileInputs('registration')}
               className='border-2 border-dashed border-gray-300 rounded-xl hover:border-lyft-500 hover:bg-gray-50 transition-colors cursor-pointer'
               label="Current Registration" key='broker-change-current-registration-input'/>
        <Input valid={brokerChangeFormValid.fh1} type='file'
               onChange={changeFileInputs('fh1')}
               className='border-2 border-dashed border-gray-300 rounded-xl hover:border-lyft-500 hover:bg-gray-50 transition-colors cursor-pointer'
               label="Current FH1 (Insurance ID Card)"
               key='broker-change-current-fh1-input'/>
      </div>
    </div>
    <div className='flex flex-col gap-4 border-t border-gray-200 pt-5'>
      <div className="bg-gray-50 border border-gray-300 rounded-xl p-4 mb-3">
        <p className="text-xs text-gray-700 leading-relaxed">I authorize SAMKARA BROKERAGE to act as my exclusive broker
          of
          record for the policy above. I am the authorized policyholder and all information provided is true and
          accurate.
          This electronic signature is legally binding.</p>
      </div>

      <Input label="Full name E-Signature"
             className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors font-serif text-lg italic'
             placeholder='John Doe'
             key='broker-change-electronical-signature-input'/>
    </div>
    <Button
      disabled={!brokerChangeSubmitButtonDisabled || loading}
      className='w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-lyft-500 text-white hover:bg-lyft-600 shadow-lg shadow-lyft-500/30'>
      {loading ? <Spinner data-icon="inline-start"/> : <RefreshCwIcon className='w-5 h-5'/>}
      Submit Change Request
    </Button>
  </form>
}

export default memo(BrokerChangeTab);
