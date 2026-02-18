import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { InputHTMLAttributes, ReactNode } from "react";

interface SelectorProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: ReactNode;
  options: { key: string, value: string, name: string }[];
  error: string;
  required?: boolean;
  valid?: boolean;
}

export default function Selector ({ label, options, error, required = false, valid, ...props }: SelectorProps) {
  return <Field className='flex-1 gap-2'>
    <FieldLabel>{label} {required ? <span className='text-red-500'>*</span> : null}</FieldLabel>
    <Select {...props}>
      <SelectTrigger aria-invalid={valid}>
        <SelectValue placeholder='Select policy type'/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(o => (
            <SelectItem key={`selector-item-key-${o.key}`} value={o.value}>
              {o.name}
            </SelectItem>))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
    {!valid ? <FieldError>{error}</FieldError> : null}
  </Field>
}
