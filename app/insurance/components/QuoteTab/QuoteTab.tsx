import Input from "@/components/manual/Input/Input";
import { SendIcon } from "lucide-react";
import Selector from "@/components/manual/Selector/Selector";
import Textarea from "@/components/manual/Textarea/Textarea";
import { Button } from "@/components/ui/button";

export default function QuoteTab () {
  return <div className='flex flex-col gap-4 justify-between'>
    <div className='flex flex-col gap-4'>
      <div className='flex gap-4'>
        <Input key='quote-tab-full-name-input' label='Full Name' placeholder='John Doe' required/>
        <Input key='quote-tab-phone-number-input' label='Phone Number' placeholder='(212) 555-0000'
               required/>
      </div>
      <Input key='quote-tab-email-address-input' label='Email Address' placeholder='(212) 555-0000'
             required/>
      <Selector label='Policy Type' error='Please select the policy type' options={[
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
      <Textarea
        key='quote-tab-textarea'
        label='Additional Details'
        rows="3"
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors resize-none"
        placeholder="Please shortly describe do you have additional drivers to add or any other questions"/>
      <Input key='quote-tab-electronic-signature-input' label='Electronic Signature' placeholder='(212) 555-0000'
             required/>
    </div>
    <Button type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-taxi-500 text-uber-900 hover:bg-taxi-400 shadow-lg shadow-taxi-500/30">
      <SendIcon className='w-5 h-5'/>
      Submit Quote Request
    </Button>
  </div>
}
