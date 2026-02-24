"use client"

import Input from "@/components/manual/Input/Input";
import { UsersIcon } from "lucide-react";
import Textarea from "@/components/manual/Textarea/Textarea";
import { Button } from "@/components/ui/button";
import FleetVehiclesSelector from "./FleetVehiclesSelector/FleetVehiclesSelector";
import { BaseSyntheticEvent, memo, useCallback, useMemo, useState } from "react";
import { IFleetForm } from "@/types/form";
import { fleetSelectorOptionsLabels } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import { useTranslations } from "next-intl";

function FleetTab () {
  const t = useTranslations('Insurance.forms.fleet');
  const [loading, setLoading] = useState(false);

  const [fleetForm, setFleetForm] = useState<IFleetForm>({
    companyName: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    vehicles: [
      { value: undefined, quantity: 0 }
    ],
    additionalDetails: ''
  });

  const changeVehicles = useCallback((value: { value: string, quantity: number }, index: number) => {
    setFleetForm(prev => ({
      ...prev,
      vehicles: prev.vehicles.map((v, i) => i === index ? value : v)
    }));
  }, [])

  const addVehicle = useCallback(() => {
    setFleetForm(prev => ({
      ...prev,
      vehicles: prev.vehicles.concat({ value: undefined, quantity: 0 })
    }));
  }, []);

  const deleteVehicle = useCallback((value: { value: string, quantity: number }, index: number) => {
    setFleetForm(prev => ({
      ...prev,
      vehicles: prev.vehicles.filter((v, i) => i !== index)
    }));
  }, []);

  const changeInput = useCallback((key: keyof Omit<IFleetForm, 'vehicles'>) => {
    return (value: BaseSyntheticEvent) => {
      setFleetForm(prev => ({
        ...prev,
        [key]: value.target.value
      }))
    }
  }, []);

  const fleetFormValid = useMemo(() => ({
    companyName: fleetForm.companyName.trim() !== '',
    contactName: fleetForm.contactName.trim() !== '',
    email: fleetForm.email.trim() !== '',
    phoneNumber: fleetForm.phoneNumber.trim() !== '',
    vehicles: fleetForm.vehicles.every(p => p.quantity !== 0 && p.value !== undefined),
  }), [fleetForm]);

  const fleetSubmitButtonDisabled = useMemo(() => Object.values(fleetFormValid).every(e => e), [fleetFormValid]);

  const sendFleetQuote = async () => {
    setLoading(true);

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/email/fleet-request`, {
      method: 'POST',
      body: {
        ...fleetForm,
        vehicles: fleetForm.vehicles.map(v => ({ value: fleetSelectorOptionsLabels[v.value], quantity: v.quantity }))
      },
      headers: {
        'X-Tenant-ID': 'samkara'
      }
    });

    setFleetForm({
      companyName: '',
      contactName: '',
      email: '',
      phoneNumber: '',
      vehicles: [
        { value: undefined, quantity: 0 }
      ],
      additionalDetails: ''
    });

    setLoading(false);
  }

  return <div className='flex flex-col gap-4 justify-between'>
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label={t('company_name')} onChange={changeInput('companyName')} key='fleet-tab-company-name-input'
               required
               placeholder='ABC Transportation LLC' error='Please fill out the Company name'
               valid={fleetFormValid.companyName}/>
        <Input label={t('contact_name')} onChange={changeInput('contactName')} key='fleet-tab-contact-name-input'
               required
               placeholder='John Doe' error='Please fill out the Contact name' valid={fleetFormValid.contactName}/>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label={t('email')} onChange={changeInput('email')} key='fleet-tab-email-address-input' required
               placeholder='ABC Transportation LLC' error='Please fill out the Email' valid={fleetFormValid.email}/>
        <Input label={t('phone_number')} onChange={changeInput('phoneNumber')} key='fleet-tab-phone-number-input'
               required
               placeholder='212-555-0000' error='Please fill out the Phone number' valid={fleetFormValid.phoneNumber}/>
      </div>
      <div className="flex items-center gap-4 border-t border-gray-200 pt-5">
        <FleetVehiclesSelector
          addVehicle={addVehicle}
          deleteVehicle={deleteVehicle}
          updateVehicle={changeVehicles}
          vehicles={fleetForm.vehicles} valid={fleetFormValid.vehicles}/>
      </div>
      <Textarea valid label={t('additional_details')} onChange={changeInput('additionalDetails')}
                placeholder='Current insurance provider, coverage needs, or any special requirements...'
                key='fleet-additional-details-textarea'/>
    </div>
    <Button
      disabled={loading || !fleetSubmitButtonDisabled}
      onClick={sendFleetQuote}
      className='w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-uber-900 text-taxi-500 hover:bg-uber-800 shadow-lg shadow-uber-900/30 border border-taxi-500'>
      {loading ? <Spinner data-icon="inline-start"/> : <UsersIcon className='w-5 h-5'/>}
      {t('submit')}
    </Button>
  </div>
}

export default memo(FleetTab);
