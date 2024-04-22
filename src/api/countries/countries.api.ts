import type { ShortCountryProfile } from './types';
import { fetcher } from '@/utils';

class CountriesApi {
  private baseUrl = 'https://restcountries.com/v3.1';

  public getAllShortCountryProfiles = async () => {
    return await fetcher<ShortCountryProfile[]>(`${this.baseUrl}/all?fields=name,flags,population,region,capital`);
  };
}

const countriesApi = new CountriesApi();

export const { getAllShortCountryProfiles } = countriesApi;
export default countriesApi;
