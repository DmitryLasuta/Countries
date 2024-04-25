import type { CountryProfile, ShortCountryProfile } from './types';

/**
 * Class for handling requests to the countries API.
 * @class
 */
class CountriesApi {
  /**
   * Base URL for the countries API.
   * @private
   */
  private readonly baseUrl = 'https://restcountries.com/v3.1';
  /**
   * Array of strings containing field names for short country profiles.
   * @private
   */
  private readonly shortProfileFields = ['flags', 'name', 'capital', 'region', 'population'];

  /**
   * Private method for performing fetch requests.
   * @param {string} url - The URL for the request.
   * @param {RequestInit} [options] - Optional request parameters.
   * @returns {Promise<T>} Returns a promise with the result of the request.
   * @private
   */
  private async fetcher<T>(url: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(url, { ...options, next: { revalidate: 3600 } });
      if (!response.ok) {
        throw new Error(`Failed to fetch. Status code ${response.status}`);
      } else {
        return (await response.json()) as T;
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  /**
   * Retrieves short profiles for all countries with selected fields.
   * @returns A promise resolving to an array of short country profiles.
   * @public
   */
  public getAllShortCountryProfiles = () => {
    return this.getField<ShortCountryProfile[]>(this.shortProfileFields);
  };

  /**
   * Retrieves specified fields for all countries.
   * @param {string[]} fields - Array of strings containing field names.
   * @returns A promise resolving to an array of values for the specified fields for all countries.
   * @public
   */
  public getField = <T>(fields: string[]) => {
    const serializedFields = fields.join(',');
    return this.fetcher<T>(`${this.baseUrl}/all?fields=${serializedFields}`);
  };

  /**
   * Retrieves a country profile by name.
   * @param {string} name - The name of the country.
   * @returns A promise resolving to a country profile.
   * @public
   */
  public getCountryProfileByName = (name: string) => {
    const fields = [...this.shortProfileFields, 'tld', 'currencies', 'languages', 'borders'];
    return this.fetcher<CountryProfile>(`${this.baseUrl}/name/${name}?fields=${fields.join(',')}`);
  };
}

const countriesApi = new CountriesApi();

export const { getAllShortCountryProfiles, getField, getCountryProfileByName } = countriesApi;
export default countriesApi;
