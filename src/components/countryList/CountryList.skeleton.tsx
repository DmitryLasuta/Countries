import { CountryCardSkeleton } from './countryCard';
import { Grid } from '../ui';

const CountryListSkeleton = ({ cardCount = 10 }: { cardCount?: number }) => {
  return (
    <Grid>
      {[...Array(cardCount)].map((_, index) => (
        <CountryCardSkeleton key={index} />
      ))}
    </Grid>
  );
};

export { CountryListSkeleton };
