import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { InputHTMLAttributes } from "react";
import { Textarea as ShadTextarea } from '@/components/ui/textarea';

interface TextareaProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  key: string;
  required?: boolean;
  valid?: boolean;
  error?: boolean;
}

export default function Textarea ({ label, key, required = false, valid, error = '', ...props }: TextareaProps) {
  return <Field>
    <FieldLabel className='text-sm font-medium text-gray-700' htmlFor={key}>{label} {required ?
      <span className='text-red-500'>*</span> : null}</FieldLabel>
    <ShadTextarea
      id={key}
      {...props}
      aria-invalid={true}
    />
    {!valid ? <FieldDescription>{error}</FieldDescription> : null}
  </Field>
}
