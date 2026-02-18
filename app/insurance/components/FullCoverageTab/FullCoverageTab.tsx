import { ShieldIcon, UploadIcon } from "lucide-react";
import Input from "@/components/manual/Input/Input";
import Textarea from "@/components/manual/Textarea/Textarea";
import { Button } from "@/components/ui/button";

export default function FullCoverageTab () {
  return <form className="space-y-5">
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
      <Input label='Full Name' placeholder='John Doe' key='claims-full-name-input'/>
      <Input label='Phone Number' placeholder='(212) 555-0000' key='claims-phone-number-input'/>
    </div>
    <Input label='Email Address' placeholder='john@example.com' key='claims-email-address-input'/>
    <div className="border-t border-gray-200 pt-5">
      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
        <ShieldIcon className='w-4 h-4 text-green-600'/>
        Current Coverage Information
      </h4>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label='Liability Policy Number' placeholder='POL-12345678' key='claims-liability-policy-number-input'/>
        <Input label='Coverage Amount Needed' placeholder='e.g., $100,000' key='claims-coverage-amount-input'/>
      </div>
    </div>
    <div className="border-t border-gray-200 pt-5">
      <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
        <UploadIcon className='w-4 h-4 text-green-600'/>
        Upload Required Documents
      </h4>
      <Input label='Bill of Sale' type='file' key='full-coverage-bill-of-sale-input'
             className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-green-500 hover:bg-gray-50 transition-colors cursor-pointer'/>
    </div>
    <Textarea label='Additional Details' key='full-coverage-additional-details-textarea'
              placeholder='Any specific coverage requirements or questions...'/>
    {/*w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors resize-none*/}
    <Button
      className='w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30'>
      <ShieldIcon className='w-5 h-5'/>
      Get Full Coverage Quote
    </Button>
  </form>
}
