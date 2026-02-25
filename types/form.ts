export interface IQuoteForm {
  fullName: string;
  phoneNumber: string;
  email: string;
  policyType: string;
  driverLicense?: File;
  tlcLicense?: File;
  fh1?: File;
  vehicleRegistration?: File;
  billOfSale?: File;
  proofOfAddress?: File;
  additionalDetails?: string;
}

export interface IBrokerChangeForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  policyNumber: string;
  policyExpirationDate: string;
  driverLicense?: File;
  registration?: File;
  fh1?: File;
}

export interface IFleetForm {
  companyName: string,
  contactName: string,
  email: string,
  phoneNumber: string,
  vehicles: { value?: string, quantity: number }[],
  additionalDetails: string
}

export interface IClaimForm {
  fullName: string;
  phoneNumber: string;
  email: string;
  policyNumber: string;
  incidentDate: string;
  incidentType: string;
  incidentDescription: string;
  pictureOrVideo?: File;
  otherDocument?: File;
  policeReport?: File;
}

export interface IFullCoverageForm {
  fullName: string;
  phoneNumber: string;
  email: string;
  liabilityPolicyNumber: string;
  coverageAmountNeeded: string;
  billOfSale?: File;
  additionalDetails?: string;
}

export interface IServiceForm {
  fullName: string
  phoneNumber: string
  email: string
  serviceType: string
  tlcLicenseNumber?: string
  dmvLicenseNumber?: string
  additionalDetails?: string
}
