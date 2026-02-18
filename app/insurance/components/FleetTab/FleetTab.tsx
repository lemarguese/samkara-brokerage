import Input from "@/components/manual/Input/Input";
import Selector from "@/components/manual/Selector/Selector";
import { CarIcon, UsersIcon } from "lucide-react";
import Textarea from "@/components/manual/Textarea/Textarea";
import { Button } from "@/components/ui/button";

export default function FleetTab () {
  return <div className='flex flex-col gap-4 justify-between'>
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label='Company Name' key='fleet-tab-company-name-input' required placeholder='ABC Transportation LLC'/>
        <Input label='Contact Name' key='fleet-tab-contact-name-input' required placeholder='John Doe'/>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label='Email Address' key='fleet-tab-email-address-input' required placeholder='ABC Transportation LLC'/>
        <Input label='Phone Number' key='fleet-tab-phone-number-input' required placeholder='212-555-0000'/>
      </div>
      <div className="border-t border-gray-200 pt-5">
        <Selector label={<div className='flex items-center gap-2'>
          <CarIcon className='w-4 h-4'/>
          Fleet Vehicles
        </div>} options={[
          { key: 'fleet-selector-option-black-car', name: 'Black Car', value: 'black-car' },
          { key: 'fleet-selector-option-car-service', name: 'Car Service', value: 'car-service' },
          { key: 'fleet-selector-option-livery', name: 'Livery', value: 'livery' },
          { key: 'fleet-selector-option-yellow-cab', name: 'Yellow Cab', value: 'yellow-cab' },
          { key: 'fleet-selector-option-ambulette', name: 'Ambulette', value: 'ambulette' },
        ]} error='Please select Vehicle Type'/>
      </div>
      <Textarea label='Additional Details'
                placeholder='Current insurance provider, coverage needs, or any special requirements...'
                key='fleet-additional-details-textarea'/>
    </div>
    <Button
      className='w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-uber-900 text-taxi-500 hover:bg-uber-800 shadow-lg shadow-uber-900/30 border border-taxi-500'>
      <UsersIcon/>
      Get Fleet Quote
    </Button>
  </div>
}
