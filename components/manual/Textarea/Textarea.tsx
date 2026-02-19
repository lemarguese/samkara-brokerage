import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { InputHTMLAttributes } from "react";
import { Textarea as ShadTextarea } from '@/components/ui/textarea';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  valid?: boolean;
  error?: boolean;
}

export default function Textarea ({ label, required = false, valid, error = '', ...props }: TextareaProps) {
  return <Field>
    <FieldLabel className='text-sm font-medium text-gray-700' htmlFor={props.key}>{label} {required ?
      <span className='text-red-500'>*</span> : null}</FieldLabel>
    <ShadTextarea
      id={props.key}
      {...props}
      aria-invalid={!valid}
    />
    {!valid ? <FieldDescription>{error}</FieldDescription> : null}
  </Field>
}
