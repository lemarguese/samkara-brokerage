import { Input as ShadInput } from '../../ui/input';
import { InputHTMLAttributes } from 'react';
import { cn } from "@/lib/utils";
import { FieldError, FieldLabel } from "@/components/ui/field";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  position?: 'horizontal' | 'vertical';
  required?: boolean;
  error?: string;
  valid?: boolean;
}

export default function Input ({ label, required = false, error, valid, position = 'vertical', ...props }: InputProps) {
  return <div className={`flex flex-1 ${position === 'vertical' ? 'flex-col' : ''} gap-2`}>
    {label ? <FieldLabel className='text-sm font-medium text-gray-700' htmlFor={props.key}>
      {label} {required ? <span className='text-red-500'>*</span> : undefined}
    </FieldLabel> : null}
    <ShadInput id={props.key}
               className={cn([`${props.type === 'file' ? 'border-dashed' : ''} w-full px-4 py-3 rounded-xl border border-gray-300 hover:currentColor focus:ring-2 focus:ring-taxi-500 focus:border-taxi-500 outline-none transition-colors`, props.className])} {...props}/>
    {!valid ? <FieldError className='text-[12px]'>{error}</FieldError> : null}
  </div>
}
