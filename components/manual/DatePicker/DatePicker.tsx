"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { InputHTMLAttributes } from "react";

function formatDate (date: Date | undefined) {
  if (!date) {
    return ""
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate (date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  valid?: boolean;
  error?: string;
}

export function DatePicker ({ label, valid, error, ...props }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>()
  const [month, setMonth] = React.useState<Date | undefined>(date)

  return (
    <Field className="flex-1 mx-auto w-48 gap-2">
      <FieldLabel htmlFor={props.key}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id={props.key}
          placeholder="June 01, 2025"
          {...props}
          onChange={(e) => {
            const date = new Date(e.target.value)
            props.onChange!(e.target.value)
            if (isValidDate(date)) {
              setDate(date)
              setMonth(date)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton
                id="date-picker"
                variant="ghost"
                size="icon-xs"
                aria-label="Select date"
              >
                <CalendarIcon/>
                <span className="sr-only">Select date</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date)
                  props.onChange!(formatDate(date))
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      {!valid ? <FieldError>{error}</FieldError> : null}
    </Field>
  )
}
