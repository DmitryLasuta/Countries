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
   * Array of strings containing field names for country profiles.
   * @private
   */
  private readonly countryProfileFields = [
    ...this.shortProfileFields,
    'tld',
    'currencies',
    'languages',
    'borders',
    'subregion',
  ];

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
      throw error;
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
  public getField = <T>(fields: string[]): Promise<T> => {
    const serializedFields = fields.join(',');
    return this.fetcher<T>(`${this.baseUrl}/all?fields=${serializedFields}`);
  };

  /**
   * Retrieves a country profile by name.
   * @param {string} name - The name of the country.
   * @returns A promise resolving to a country profile.
   * @public
   */
  public getCountryProfileByName = async (name: string): Promise<CountryProfile> => {
    const data = await this.fetcher<CountryProfile[]>(
      `${this.baseUrl}/name/${name}?fields=${this.countryProfileFields.join(',')}`
    );
    return data[0];
  };

  /**
   * Retrieves a country profile by code.
   * @param code - The code of the country.
   * @returns A promise resolving to a country profile.
   */

  public getCountryProfileByCode = (code: string): Promise<CountryProfile> => {
    return this.fetcher<CountryProfile>(`${this.baseUrl}/alpha/${code}?fields=${this.countryProfileFields.join(',')}`);
  };

  /**
   * Retrieves countries by region.
   * @param region - The name of the region.
   * @returns A promise resolving to an array of country profiles.
   */
  public getCountriesByRegion = (region: string): Promise<ShortCountryProfile[]> => {
    return this.fetcher<ShortCountryProfile[]>(
      `${this.baseUrl}/region/${region}?fields=${this.shortProfileFields.join(',')}`
    );
  };
}

const countriesApi = new CountriesApi();

export const {
  getAllShortCountryProfiles,
  getField,
  getCountryProfileByName,
  getCountryProfileByCode,
  getCountriesByRegion,
} = countriesApi;
export default countriesApi;
