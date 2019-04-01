/**
 * Address class for Tomtom API
 * Data form sample: { country: "France", countryCode: "FR", countryCodeISO3: "FRA",
 * countrySecondarySubdivision: "Seine-Saint-Denis",countrySubdivision: "Île-de-France",
 * freeformAddress: "11 Rue du 11 Novembre, Aulnay-sous-Bois, 93600",
 * municipality: "Aulnay-sous-Bois", municipalitySubdivision: "Aulnay-sous-Bois",
 * postalCode: "93600", streetName: "Rue du 11 Novembre", streetNumber: "11"}
 */
export class Address {
  country: string;
  countryCode: string;
  countryCodeISO3: string;
  countrySecondarySubdivision: string;
  countrySubdivision: string;
  freeformAddress: string;
  municipality: string;
  municipalitySubdivision: string;
  postalCode: string;
  streetName: string;
  streetNumber: string;
}
