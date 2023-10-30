import stylesClassList from './styles.module.css'

import { ScrollToTopButton } from '@components/scrollToTopButton'
import { Link, useLocation } from 'react-router-dom'
import { CountryProfileCard } from './countryProfileCard'
import type { Country } from '@redux/countries'
import { useChunks } from '@hooks/useChunks'

const CountriesList = ({ countryDataset }: { countryDataset: Country[] }) => {
  const { pathname } = useLocation()
  const { chunkToRender: countryForDisplay, goToNextChunk } = useChunks(
    countryDataset,
    16
  )

  return (
    <section className={stylesClassList.countries}>
      <div className="container">
        <p className={stylesClassList.countries__count}>
          Countries: <strong>{countryDataset.length}</strong>
        </p>

        <ul className={stylesClassList.countries__list}>
          {countryForDisplay.map(country => (
            <li key={country.name.common}>
              <Link
                className={stylesClassList.countries__link}
                to={`${pathname}/${country.name.common}`}
              >
                <CountryProfileCard {...country} />
              </Link>
            </li>
          ))}
        </ul>

        {countryForDisplay.length < countryDataset.length ? (
          <button
            type="button"
            onClick={goToNextChunk}
            className={stylesClassList.countries__button}
          >
            Load more
          </button>
        ) : null}

        <ScrollToTopButton />
      </div>
    </section>
  )
}

export default CountriesList
