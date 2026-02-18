import { TriangleAlertIcon, UploadIcon } from "lucide-react";
import Input from "@/components/manual/Input/Input";
import { DatePicker } from "@/components/manual/DatePicker/DatePicker";
import Selector from "@/components/manual/Selector/Selector";
import Textarea from "@/components/manual/Textarea/Textarea";

export default function ClaimsTab () {
  return <form className='flex flex-col gap-4 justify-between'>
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
        <Input label='Full Name' placeholder='John Doe' key='claims-full-name-input'/>
        <Input label='Phone Number' placeholder='(212) 555-0000' key='claims-phone-number-input'/>
      </div>
      <div className='flex items-center gap-4'>
        <Input label='Email Address' placeholder='john@example.com' key='claims-email-address-input'/>
        <Input label='Policy Number' placeholder='POL-12345678' key='claims-policy-number-input'/>
      </div>
      <div className='flex items-center gap-4'>
        <DatePicker label='Incident Date' key='claims-incident-date-input'/>
        <Selector valid={true} label='Incident type' options={[
          { key: 'collision-accident', name: 'Collision / Accident', value: 'collision-accident' },
          { key: 'property-damage', name: 'Property Damage', value: 'property-damage' },
          { key: 'personal-injury', name: 'Personal Injury', value: 'personal-injury' },
          { key: 'theft-vandalism', name: 'Theft / Vandalism', value: 'theft-vandalism' },
          { key: 'glass-windshield', name: 'Glass / Windshield', value: 'glass-windshield' },
          { key: 'roadside-assistance', name: 'Roadside Assistance', value: 'roadside-assistance' },
          { key: 'other', name: 'Other', value: 'other' }
        ]
        } error='Please select the incident type'/>
      </div>
      <Textarea label='Description of Incident' key='claims-description-incident-textarea'
                placeholder='Please describe what happened, including location, time, and any other relevant details...'/>
    </div>
    <div className="border-t border-gray-200 pt-5">
      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
        <UploadIcon className='w-4 h-4 text-orange-500'/>
        Upload Supporting Documents
      </h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input label='Other Documents'
               className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-gray-50 transition-colors cursor-pointer'
               key='claims-other-documents-input' type='file'/>
        <Input label='Pictures or Video'
               className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-gray-50 transition-colors cursor-pointer'
               key='claims-pictures-or-video-input' type='file'/>
        <Input label='Police Report'
               className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-orange-500 hover:bg-gray-50 transition-colors cursor-pointer'
               key='claims-police-report-input' type='file'/>
      </div>
    </div>
    <button type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30">
      <TriangleAlertIcon className='w-5 h-5'/>
      Submit Claim Request
    </button>
  </form>
}
