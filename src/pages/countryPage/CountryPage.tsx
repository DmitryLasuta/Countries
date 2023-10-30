import { CountryDetail } from '@components/countryDetail'
import styles from './styles.module.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useGetCountryByNameQuery } from '@redux/countries'

export default function CountryPage() {
  const { commonName } = useParams<{ commonName?: string }>()
  const safeCommonName = commonName ?? ''
  const { data: country, isFetching, isError } = useGetCountryByNameQuery(safeCommonName)

  const navigate = useNavigate()

  if (isFetching || !country) return <div>Loading...</div>

  if (isError) return <Navigate to="/notFound" replace />
  else {
    console.log(country)
    const countryDetails: {
      label: keyof typeof country
      value: string
    }[] = [
      {
        label: 'capital',
        value: country.capital ? country.capital.join(', ') : '',
      },
      {
        label: 'region',
        value: country.region,
      },
      {
        label: 'population',
        value: `${country.population} people`,
      },
      {
        label: 'area',
        value: `${country.area} km2`,
      },

      {
        label: 'languages',
        value: Object.values(country.languages ?? {}).join(', '),
      },
    ]

    return (
      <section className={styles.country}>
        <button
          className={styles['country__back-button']}
          onClick={() => navigate(-1)}
          type="button"
        >
          back
        </button>

        <header className={styles.country__header}>
          <h2 className={styles.country__title}>
            {country.name.official} ({country.name.common})
          </h2>
          <img
            className={styles.country__flag}
            src={country.flags.svg}
            alt={country.flags.alt}
            width="800"
          />
        </header>
        <div className={styles.country__info}>
          {countryDetails.map(({ label, value }) => (
            <CountryDetail key={label} label={label} value={value} />
          ))}
        </div>
      </section>
    )
  }
}
