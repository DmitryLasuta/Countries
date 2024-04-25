import { getCountryProfileByCode, getCountryProfileByName } from '@/api';

import { GoBackButton } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default async function Country({ params }: Readonly<{ params: { name: string } }>) {
  let country;
  if (params.name.length <= 3) {
    country = await getCountryProfileByCode(params.name);
  } else country = await getCountryProfileByName(params.name);
  const { name, flags, borders, capital, currencies, languages, population, region, tld, subregion } = country;

  const nativeName = Object.values(name.nativeName)[0].common;
  const currenciesList = Object.values(currencies);
  const languagesList = Object.values(languages);

  const overview = {
    firstRow: {
      'Native Name': nativeName,
      Population: population,
      Region: region,
      'Sub Region': subregion,
      Capital: capital.join(', '),
    },

    secondRow: {
      'Top Level Domain': tld[0],
      Currencies: currenciesList.map(c => c.name).join(', '),
      Languages: languagesList.join(', '),
    },
  };

  return (
    <>
      <GoBackButton />
      <figure className="flex flex-col lg:flex-row lg:gap-10 mx-auto max-w-7xl">
        <picture className="flex items-center justify-center">
          <source srcSet={flags.svg} type="image/svg+xml" />
          <Image
            className="w-[95%] max-w-[520px] aspect-[2/1] border dark:border-transparent border-very-dark-blue"
            src={flags.png}
            alt={flags.alt}
            width={300}
            height={200}
          />
        </picture>
        <figcaption>
          <h1 className="capitalize font-bold text-xl my-4 text-center lg:text-left">{name.common}</h1>
          <div className="flex flex-col sm:flex-row sm:gap-10 justify-center">
            {Object.values(overview).map((row, index) => (
              <ul key={index} className="flex flex-col">
                {Object.entries(row).map(([rowName, rowValue]) => (
                  <li key={rowName}>
                    <span className="font-bold">{rowName}</span>: {rowValue}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div>
            Borders:{' '}
            {borders.length ? (
              borders.map((border, index) => (
                <Link key={index} href={`/${border}`} className="mx-2">
                  {border}
                </Link>
              ))
            ) : (
              <span className="text-slate-500">No borders</span>
            )}
          </div>
        </figcaption>
      </figure>
    </>
  );
}
