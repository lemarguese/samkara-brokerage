import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { InputHTMLAttributes } from "react";
import { Textarea as ShadTextarea } from '@/components/ui/textarea';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  valid?: boolean;
  error?: string;
}

export default function Textarea ({ label, required = false, valid, error = '', ...props }: TextareaProps) {
  return <Field>
    <FieldLabel className='text-sm font-medium text-gray-700' htmlFor={props.id}>{label} {required ?
      <span className='text-red-500'>*</span> : null}</FieldLabel>
    <ShadTextarea
      id={props.id}
      {...props}
      aria-invalid={!valid}
    />
    {!valid ? <FieldDescription>{error}</FieldDescription> : null}
  </Field>
}
