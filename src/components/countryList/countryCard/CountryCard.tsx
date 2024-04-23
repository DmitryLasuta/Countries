import Image from 'next/image';
import type { ShortCountryProfile } from '@/api';

type CountryCardProps = {
  country: ShortCountryProfile;
};

const CountryCard = ({ country }: CountryCardProps) => {
  const { capital, flags, name, population, region } = country;
  return (
    <section className="bg-white rounded dark:bg-dark-blue border border-very-dark-blue dark:border-none">
      <figure>
        <picture className="p-2 flex">
          <source srcSet={flags.svg} type="image/svg+xml" />
          <Image className="w-full aspect-[2/1]" src={flags.png} alt={flags.alt} width={300} height={200} />
        </picture>
        <figcaption className="px-4 py-2">
          <h3 className="capitalize font-bold text-xl my-2">{name.common}</h3>
          <p>
            <span className="font-bold">Capital</span>: {capital[0]}
          </p>
          <p>
            <span className="font-bold">Population</span>: {population}
          </p>
          <p>
            <span className="font-bold">Region</span>: {region}
          </p>
        </figcaption>
      </figure>
    </section>
  );
};

export { CountryCard };
