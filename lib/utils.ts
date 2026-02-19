import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const REGEXES = {
  US_PHONE: /^(?:\+1\s?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
}

export const fleetSelectorOptionsLabels = {
  'black-car': 'Black Car',
  'car-service': 'Car Service',
  'livery': 'Livery',
  'yellow-cab': 'Yellow Cab',
  'ambulette': 'Ambulette'
}

export const fleetSelectorOptions = [
  { key: 'fleet-selector-option-black-car', name: 'Black Car', value: 'black-car' },
  { key: 'fleet-selector-option-car-service', name: 'Car Service', value: 'car-service' },
  { key: 'fleet-selector-option-livery', name: 'Livery', value: 'livery' },
  { key: 'fleet-selector-option-yellow-cab', name: 'Yellow Cab', value: 'yellow-cab' },
  { key: 'fleet-selector-option-ambulette', name: 'Ambulette', value: 'ambulette' },
];
