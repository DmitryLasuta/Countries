import { CountryCard } from './countryCard';
import { Grid } from '@/components/ui';
import { getAllShortCountryProfiles } from '@/api';

const CountryList = async () => {
  const countries = await getAllShortCountryProfiles();
  return (
    <Grid>
      {countries.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </Grid>
  );
};

export { CountryList };
