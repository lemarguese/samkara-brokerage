  "use client"

  import { CarIcon, MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import Input from "@/components/manual/Input/Input";
  import { Field, FieldError, FieldLabel } from "@/components/ui/field";
  import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
  import { fleetSelectorOptions } from "@/lib/utils";

  interface FleetVehiclesSelectorProps {
    valid?: boolean;
    vehicles: { value: string | undefined, quantity: number }[];
    addVehicle: () => void;
    deleteVehicle: (value: { value: string, quantity: number }, index: number) => void;
    updateVehicle: (value: { value: string, quantity: number }, index: number) => void;
  }

  export default function FleetVehiclesSelector ({
                                                   valid,
                                                   vehicles,
                                                   addVehicle,
                                                   updateVehicle,
                                                   deleteVehicle
                                                 }: FleetVehiclesSelectorProps) {
    return <Field className='flex flex-col gap-2'>
      <FieldLabel>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <CarIcon className='w-4 h-4'/>
            Fleet Vehicles
            <span className='text-red-500'>*</span>
          </div>
          <Button variant='ghost' onClick={addVehicle}>
            <PlusIcon className='w-4 h-4'/>
            Add vehicle
          </Button>
        </div>
      </FieldLabel>
      {vehicles.map((v, index) => <div key={`fleet-vehicles-selector-${v.value}`} className='flex justify-between'>
        <Select value={v.value}
                onValueChange={(value) => updateVehicle({ value: value, quantity: v.quantity }, index)}>
          <SelectTrigger aria-invalid={valid}>
            <SelectValue placeholder='Select policy type'/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {fleetSelectorOptions.map(o => (
                <SelectItem key={`selector-item-key-${o.key}`} value={o.value}>
                  {o.name}
                </SelectItem>))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' disabled={v.quantity <= 0}
                  onClick={() => updateVehicle({ value: v.value, quantity: v.quantity - 1 }, index)}>
            <MinusIcon className='w-4 h-4'/>
          </Button>
          <Input value={v.quantity} className='w-[42px] text-center'
                 onChange={(event) => updateVehicle({ value: v.value, quantity: event.target.value }, index)}/>
          <Button variant='ghost' onClick={() => updateVehicle({ value: v.value, quantity: v.quantity + 1 }, index)}>
            <PlusIcon className='w-4 h-4'/>
          </Button>
          {vehicles.length > 1 ? <Button onClick={() => deleteVehicle(v, index)} className='bg-red-400'>
            <TrashIcon/>
          </Button> : null}
        </div>
      </div>)}
      {!valid ? <FieldError>Please select Vehicle Type</FieldError> : null}
    </Field>
  }
