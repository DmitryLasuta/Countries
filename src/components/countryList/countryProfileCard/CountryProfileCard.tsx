import { Country } from '@redux/countries'
import stylesClassList from './styles.module.css'

const CountryProfileCard = ({ flags, capital, name, population, region }: Country) => {
  return (
    <figure className={stylesClassList.countries__profile}>
      <picture className={stylesClassList['countries__profile-flag']}>
        <source srcSet={flags.png} type="image/png" />
        <img height="100" width="100%" src={flags.svg} alt={flags.alt} />
      </picture>

      <figcaption className={stylesClassList['countries__profile-info']}>
        <h3 className={stylesClassList['countries__profile-title']}>{name.common}</h3>

        <p className={stylesClassList['countries__profile-details']}>
          <strong>Population</strong>:{' '}
          {population.toLocaleString('ru-RU', {
            useGrouping: true,
            maximumFractionDigits: 2,
          })}
        </p>
        <p className={stylesClassList['countries__profile-details']}>
          <strong>Region</strong>: {region}
        </p>
        <p className={stylesClassList['countries__profile-details']}>
          <strong>Capital</strong>: {capital}
        </p>
      </figcaption>
    </figure>
  )
}

export default CountryProfileCard
