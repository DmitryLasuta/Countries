# Countries

<p align="center">
   <img alt="Countries" src="./docs/preview.png"  />
<p>

## Description

Countries is a web application developed using:

- React;
- Redux Toolkit;
- RTK Query;
- React Router;
- Redux Middleware.

It provides information about different countries and allows users to obtain detailed information about each country.

## Functionality

### Routing

The ability to navigate between different pages in the application, such as the home page, detailed page, and search page.

```tsx
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />

        <Route element={<PrivateRouter />}>
          <Route path="/AllCountries">
            <Route index element={<AllCountries />} />
            <Route path=":commonName" element={<CountryPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
```

The project has the simple private route that checks if the user is authenticated or not.

```tsx
export default function PrivateRouter() {
  const location = useLocation()
  const { isLoggedIn } = useAppSelector(state => state.auth)

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
```

### Fetching country data from an external API.

To fetch country data from an external API, the project uses the [REST Countries API](https://restcountries.com/).
For this case the project uses the [React Query](https://react-query-v3.tanstack.com/) library.

There are queries for the following endpoints:

- AllCountries: Retrieves a list of all countries.
- CountryPage: Retrieves detailed information about a specific country.

```tsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Country } from './types'

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RESTCOUNTRIES_API_KEY,
  }),
  endpoints: builder => ({
    getCountries: builder.query<Country[], void>({
      query: () => 'all',
      transformResponse: (response: Country[]) =>
        response.sort((a, b) => a.name.official.localeCompare(b.name.official)),
    }),
    getCountryByName: builder.query<Country, string>({
      query: name => `name/${name}`,
      transformResponse: (response: Country[]) => response[0],
    }),
  }),
})

export const { useGetCountriesQuery, useGetCountryByNameQuery } = countriesApi
```

### Ability to search for a country by name

Inside the AllCountries page, define the following state variables and hooks:

- searchTerms - a state variable that stores the search query.
- deferredSearchTerms - a variable obtained using the useDeferredValue hook to delay the update of the searchTerms value.
- data and isFetching - the result and loading state of the data fetched using the useGetCountriesQuery hook.

> If the data is being fetched or the data is not available yet, the component returns a `"Loading..."` message.

- filteredCountries - this is the filtered list of countries based on the search query. The list is filtered based on the country name using the filter method and checking if the search query is included in the country name.

```tsx
const [searchTerms, setSearchTerms] = useState('')
const deferredSearchTerms = useDeferredValue(searchTerms)
const { data, isFetching } = useGetCountriesQuery()

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
```

### Detailed page with information about the selected country, including population, area, currency, and other details

### Theme customization: Ability to change the theme of the application, allowing users to switch between light and dark themes using the `theme context`

### Pagination: The ability to split the results of API queries into smaller chunks, improving performance and user experience for large datasets.

I have created the custom hook `useChunks` to achieve this. It takes an array of items and a chunk size as input and returns an array of chunks.

```tsx
export const useChunks = <T,>(dataSet: T[], chunkSize: number = 10) => {
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0)

  const chunks = dataSet.reduce((acc: Array<T[]>, country, index) => {
    if (index % chunkSize === 0) {
      acc.push([])
    }
    acc[acc.length - 1].push(country)

    return acc
  }, [])

  const chunkToRender = chunks.slice(0, currentChunkIndex + 1).flat()
  const goToNextChunk = () => setCurrentChunkIndex(prev => prev + 1)
  const resetChunks = () => setCurrentChunkIndex(0)

  useEffect(() => {
    if (chunkToRender.length <= chunkSize) setCurrentChunkIndex(0)
  }, [chunkSize, chunkToRender.length])

  return {
    chunkToRender,
    currentChunkIndex,
    goToNextChunk,
    resetChunks,
  }
}
```
