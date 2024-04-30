import { getAllShortCountryProfiles, getCountriesByRegion } from '@/api';

import { CountryCard } from './countryCard';
import { Grid } from '@/components/ui';

type CountryListProps = {
  region?: string;
  q?: string;
};

const CountryList = async ({ region = 'all', q = '' }: CountryListProps) => {
  const countries = region === 'all' ? await getAllShortCountryProfiles() : await getCountriesByRegion(region);
  const searchedCountries = q ? countries.filter(country => country.name.common.includes(q)) : countries;

  if (!searchedCountries.length) return <p className="text-center">No countries found</p>;

  return (
    <Grid>
      {searchedCountries.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </Grid>
  );
};

export { CountryList };
