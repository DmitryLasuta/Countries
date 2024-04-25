import type { Currencies } from './fields';
import type { ShortCountryProfile } from './shortCountryProfile';

export interface CountryProfile extends ShortCountryProfile {
  tld: string[];
  currencies: Currencies;
  borders: string[];
  languages: Record<string, string>;
}
