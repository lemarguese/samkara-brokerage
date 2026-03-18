import { CheckIcon, CircleAlertIcon, XIcon } from "lucide-react";

interface FormStatusProps {
  status: 'success' | 'pending' | 'error';
}

const FormStatus = ({ status }: FormStatusProps) => {
  const statusIcon = {
    success: {
      background: 'bg-green-100',
      icon: <CheckIcon className='w-8 h-8 text-green-600'/>,
      statusText: 'Form submitted successfully!',
      contentText: "Thank you! We've received your submission and will get back to you within 1–2 business days."
    },
    error: {
      background: 'bg-red-100',
      icon: <XIcon className='w-8 h-8 text-red-600'/>,
      statusText: 'Something went wrong.',
      contentText: "We couldn't submit your form. Please try again or contact us at info@samkarabrokerage.com."
    },
    pending: {
      background: 'bg-yellow-100',
      icon: <CircleAlertIcon className='w-8 h-8 text-yellow-600'/>,
      statusText: 'Submitting your form...',
      contentText: 'Please wait while we process your request. Do not close this page.'
    }
  }

  return <div className="h-full flex flex-col items-center justify-center py-12 px-6 text-center gap-6">
    <div className={`w-18 h-18 rounded-full ${statusIcon[status].background} flex items-center justify-center`}>
      {statusIcon[status].icon}
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-medium text-gray-900">{statusIcon[status].statusText}</h2>
      <p className="text-sm text-gray-500 leading-relaxed max-w-sm">{statusIcon[status].contentText}</p>
    </div>
  </div>
}

export default FormStatus;
