import type { ShortCountryProfile } from './types';
import { fetcher } from '@/utils';

/**
 * Class for interacting with the countries API.
 */
class CountriesApi {
  /** Base URL for the countries API. */
  private baseUrl = 'https://restcountries.com/v3.1';

  /**
   * Retrieves short profiles for all countries with selected fields.
   * @returns A promise resolving to an array of short country profiles.
   */
  public getAllShortCountryProfiles = async () => {
    // Define fields for short country profiles
    const shortProfileFields = ['flags', 'name', 'capital', 'region', 'population'];
    return await this.getField<ShortCountryProfile[]>(shortProfileFields);
  };

  /**
   * Retrieves specified fields for all countries.
   * @param fields Array of strings containing field names.
   * @returns A promise resolving to an array of values for the specified fields for all countries.
   */
  public getField = async <T>(fields: string[]) => {
    const serializedFields = fields.join(',');
    return await fetcher<T>(`${this.baseUrl}/all?fields=${serializedFields}`);
  };
}

const countriesApi = new CountriesApi();

export const { getAllShortCountryProfiles, getField } = countriesApi;
export default countriesApi;
