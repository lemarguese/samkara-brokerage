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

export const dmvOrTlcSelectorOptions = [
  {
    key: 'tlc_driver_license_applications_renewals',
    value: 'tlc_driver_license_applications_renewals',
    name: 'TLC Driver License Applications & Renewals'
  },
  {
    key: 'tlc_vehicle_licensing_plate_transfers',
    value: 'tlc_vehicle_licensing_plate_transfers',
    name: 'TLC Vehicle Licensing & Plate Transfers'
  },
  { key: 'base_affiliation_transfers', value: 'base_affiliation_transfers', name: 'Base Affiliation & Transfers' },
  {
    key: 'tlc_insurance_services',
    value: 'tlc_insurance_services',
    name: 'TLC Insurance Services (FH-1, Certificates)'
  },
  {
    key: 'tlc_summons_assistance_violation_disputes',
    value: 'tlc_summons_assistance_violation_disputes',
    name: 'TLC Summons Assistance & Violation Disputes'
  },
  {
    key: 'tlc_license_reinstatement_assistance',
    value: 'tlc_license_reinstatement_assistance',
    name: 'TLC License Reinstatement Assistance'
  },
  { key: 'tlc_vehicle_permit_renewals', value: 'tlc_vehicle_permit_renewals', name: 'TLC Vehicle Permit Renewals' },
  { key: 'wav_licensing', value: 'wav_licensing', name: 'Wheelchair-Accessible Vehicle (WAV) Licensing' },
  {
    key: 'drug_test_defensive_driving',
    value: 'drug_test_defensive_driving',
    name: 'Drug Test & Defensive Driving Registration'
  },
  {
    key: 'fingerprinting_background_check',
    value: 'fingerprinting_background_check',
    name: 'Fingerprinting & Background Check Assistance'
  },
  {
    key: 'tlc_inspection_compliance',
    value: 'tlc_inspection_compliance',
    name: 'TLC Inspection & Compliance Guidance'
  },
  {
    key: 'vehicle_registration_title_services',
    value: 'vehicle_registration_title_services',
    name: 'Vehicle Registration & Title Services'
  },
  {
    key: 'license_plate_issuance_surrender',
    value: 'license_plate_issuance_surrender',
    name: 'License Plate Issuance & Surrender'
  },
  {
    key: 'registration_renewals_duplicates',
    value: 'registration_renewals_duplicates',
    name: 'Registration Renewals & Duplicates'
  },
  { key: 'title_transfers_corrections', value: 'title_transfers_corrections', name: 'Title Transfers & Corrections' },
  { key: 'duplicate_title_requests', value: 'duplicate_title_requests', name: 'Duplicate Title Requests' },
  { key: 'out_of_state_title_transfers', value: 'out_of_state_title_transfers', name: 'Out-of-State Title Transfers' },
  {
    key: 'commercial_fleet_registration',
    value: 'commercial_fleet_registration',
    name: 'Commercial & Fleet Registration'
  },
  { key: 'custom_specialty_plates', value: 'custom_specialty_plates', name: 'Custom & Specialty Plates' },
  {
    key: 'insurance_compliance_assistance',
    value: 'insurance_compliance_assistance',
    name: 'Insurance Compliance Assistance'
  },
  { key: 'address_name_changes', value: 'address_name_changes', name: 'Address & Name Changes' },
  {
    key: 'vin_verification_corrections',
    value: 'vin_verification_corrections',
    name: 'VIN Verification & Corrections'
  },
  { key: 'expedited_dmv_transactions', value: 'expedited_dmv_transactions', name: 'Expedited DMV Transactions' },
  { key: 'tlc_plates_from_scratch', value: 'tlc_plates_from_scratch', name: 'TLC Plates from Scratch' },
  {
    key: 'vehicle_conversion_wav',
    value: 'vehicle_conversion_wav',
    name: 'Vehicle Conversion to Wheelchair Accessible'
  }
]
