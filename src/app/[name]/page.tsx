import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCountryDataByNameOrCode } from '@/services';

type CountryPageParams = Readonly<{ params: { name: string } }>;

export async function generateMetadata({ params }: CountryPageParams): Promise<Metadata> {
  const country = await getCountryDataByNameOrCode(params.name);

  return {
    title: `${country.name.common} | Countries`,
    description: `Learn more about ${country.name.common} on Countries.`,
    openGraph: {
      title: `${country.name.common} | Countries`,
      description: `Learn more about ${country.name.common} on Countries.`,
      images: [
        {
          url: country.flags.svg,
          alt: `${country.name.common} flag`,
        },
      ],
    },
  };
}

export default async function Country({ params }: CountryPageParams) {
  const { name, flags, borders, capital, currencies, languages, population, region, tld, subregion } =
    await getCountryDataByNameOrCode(params.name);

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
    <figure className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 mx-auto max-w-7xl mt-10">
      <picture className="flex items-center justify-center">
        <source srcSet={flags.svg} type="image/svg+xml" />
        <Image
          className="w-[95%] max-w-[520px] aspect-[2/1] border dark:border-transparent border-very-dark-blue"
          src={flags.png}
          alt={flags.alt}
          width={520}
          height={300}
        />
      </picture>
      <figcaption>
        <h1 className="capitalize font-bold text-xl my-4 text-center lg:text-left">{name.common}</h1>
        <div className="flex flex-col sm:flex-row sm:gap-10 mb-">
          {Object.values(overview).map((row, index) => (
            <ul key={index}>
              {Object.entries(row).map(([rowName, rowValue]) => (
                <li className="mb-2" key={rowName}>
                  <span className="font-bold">{rowName}</span>: {rowValue}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex mt-4 items-center gap-2">
          <h4>Border Countries: </h4>
          <ul className="flex gap-2 flex-wrap">
            {borders.length ? (
              borders.map((border, index) => (
                <Link
                  className="rounded px-2 py-1 bg-slate-400 hover:bg-slate-600 text-dark-blue hover:text-white dark:bg-slate-700 dark:hover:bg-slate-500 dark:text-white transition-colors"
                  key={index}
                  href={`/${border}`}
                >
                  {border}
                </Link>
              ))
            ) : (
              <li className="text-slate-500">No borders</li>
            )}
          </ul>
        </div>
      </figcaption>
    </figure>
  );
}
