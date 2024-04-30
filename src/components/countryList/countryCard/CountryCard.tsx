import Image from 'next/image';
import Link from 'next/link';
import type { ShortCountryProfile } from '@/api';

type CountryCardProps = {
  country: ShortCountryProfile;
};

const CountryCard = ({ country }: CountryCardProps) => {
  const { capital, flags, name, population, region } = country;
  return (
    <section className="bg-very-light-gray rounded dark:bg-dark-blue border border-very-dark-blue dark:border-none p-2">
      <figure>
        <picture className="flex">
          <source srcSet={flags.svg} type="image/svg+xml" />
          <Image
            className="w-full aspect-[2/1] border dark:border-transparent border-very-dark-blue"
            src={flags.png}
            alt={flags.alt}
            width={300}
            height={200}
          />
        </picture>
        <figcaption className="px-2 mb-2">
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
      <Link
        className="px-4 py-2 text-center text-white block bg-dark-gray dark:bg-slate-800 dark:hover:bg-slate-500  hover:bg-slate-500 transition-colors"
        href={`/${name.common}`}
      >
        See details
      </Link>
    </section>
  );
};

export { CountryCard };
