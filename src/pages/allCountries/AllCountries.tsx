import { CountriesList, SearchControl } from '@components/index'
import { useGetCountriesQuery } from '@redux/countries'
import { useState, useDeferredValue } from 'react'

export default function AllCountries() {
  const [searchTerms, setSearchTerms] = useState('')
  const deferredSearchTerms = useDeferredValue(searchTerms)
  const { data, isFetching,  } = useGetCountriesQuery()

  if (isFetching || !data) {
    return <div>Loading...</div>
  }

  const filteredCountries = data.filter(country =>
    country.name.common.toLowerCase().includes(deferredSearchTerms.toLowerCase())
  )

  return (
    <>
      <SearchControl searchHandler={setSearchTerms} />
      <CountriesList countryDataset={filteredCountries} />
    </>
  )
}
