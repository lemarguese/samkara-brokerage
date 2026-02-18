import { Input as ShadInput } from '../../ui/input';
import { InputHTMLAttributes } from 'react';
import { Label } from "@/components/ui/label";

interface InputProps extends InputHTMLAttributes<any> {
  label: string;
  position?: 'horizontal' | 'vertical';
  required?: boolean;
  key: string;
}
export default function Input ({ label, required = false, position = 'vertical', key, ...props }: InputProps) {
  return <div className={`flex flex-1 ${position === 'vertical' ? 'flex-col' : ''} gap-2`}>
    <Label className='text-sm font-medium text-gray-700' htmlFor={key}>
      {label} {required ? <span className='text-red-500'>*</span> : undefined}
    </Label>
    <ShadInput id={key}
               className={`${props.type === 'file' ? 'border-dashed' : ''} w-full px-4 py-3 rounded-xl border border-gray-300 hover:currentColor cursor-pointer focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors`} {...props}/>
  </div>
}
