import Input from "@/components/manual/Input/Input";
import { RefreshCwIcon, UploadIcon } from "lucide-react";
import { DatePicker } from "@/components/manual/DatePicker/DatePicker";
import { Button } from "@/components/ui/button";

export default function BrokerChangeTab () {
  return <form className='flex flex-col gap-4 justify-between'>
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <Input key='quote-tab-full-name' label='Full Name' placeholder='John Doe' required/>
        <Input key='quote-tab-phone-number' label='Phone Number' placeholder='(212) 555-0000'
               required/>
      </div>
      <Input key='quote-tab-email-address' label='Email Address' placeholder='(212) 555-0000'
             required/>
    </div>
    <div className='flex flex-col gap-4 border-t border-gray-200 pt-5'>
      <h4 className='text-sm font-bold text-gray-900 flex items-center gap-2'>
        <RefreshCwIcon className='w-4 h-4 text-lyft-500'/>
        Current Policy Information
      </h4>
      <div className='flex gap-4 items-center'>
        <Input key='quote-tab-phone-number' label='Phone Number' placeholder='(212) 555-0000'
               required/>
        <DatePicker key='broker-change-policy-expiration-input' label='Policy Expiration'/>
      </div>
    </div>
    <div className='flex flex-col gap-4 border-t border-gray-200 pt-5'>
      <h4 className='text-sm font-bold text-gray-900 flex items-center gap-2'>
        <UploadIcon className='w-4 h-4 text-lyft-500'/>
        Upload Required Documents
      </h4>
      <div className='grid sm:grid-cols-2 gap-4'>
        <Input type='file'
               className='border-2 border-dashed border-gray-300 rounded-xl hover:border-lyft-500 hover:bg-gray-50 transition-colors cursor-pointer'
               label="Driver's License" key='broker-change-driver-license-input'/>
        <Input type='file'
               className='border-2 border-dashed border-gray-300 rounded-xl hover:border-lyft-500 hover:bg-gray-50 transition-colors cursor-pointer'
               label="Current Registration" key='broker-change-current-registration-input'/>
        <Input type='file'
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
      className='w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-lyft-500 text-white hover:bg-lyft-600 shadow-lg shadow-lyft-500/30'>
      <RefreshCwIcon />
      Submit Change Request
    </Button>
  </form>
}
