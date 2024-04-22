import type { ShortCountryProfile } from './types';
import { fetcher } from '@/utils';

class CountriesApi {
  private baseUrl = 'https://restcountries.com/v3.1';

  public getAllShortCountryProfiles = async () => {
    const fields = ['name', 'flags', 'population', 'region', 'capital'];
    return await fetcher<ShortCountryProfile[]>(`${this.baseUrl}/all?fields=${fields.join(',')}`);
  };
}

const countriesApi = new CountriesApi();

export const { getAllShortCountryProfiles } = countriesApi;
export default countriesApi;
