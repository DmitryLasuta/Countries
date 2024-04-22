import type { ShortCountryProfile } from './types';
import { fetcher } from '@/utils';

class CountriesApi {
  private baseUrl = 'https://restcountries.com/v3.1';

  public getAllShortCountryProfiles = async () => {
    const shortProfileFields = ['flags', 'name', 'capital', 'region', 'population'];
    return await this.getField<ShortCountryProfile[]>(shortProfileFields);
  };

  public getField = async <T>(fields: string[]) => {
    const serializedFields = fields.join(',');
    return await fetcher<T>(`${this.baseUrl}/all?fields=${serializedFields}`);
  };
}

const countriesApi = new CountriesApi();

export const { getAllShortCountryProfiles, getField } = countriesApi;
export default countriesApi;
