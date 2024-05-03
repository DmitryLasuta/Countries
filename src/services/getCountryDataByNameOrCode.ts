import { type CountryProfile, getCountryProfileByCode, getCountryProfileByName } from '@/api';

export async function getCountryDataByNameOrCode(nameOrCode: string): Promise<CountryProfile> {
  const country =
    nameOrCode.length <= 3 ? await getCountryProfileByCode(nameOrCode) : await getCountryProfileByName(nameOrCode);

  return country;
}
