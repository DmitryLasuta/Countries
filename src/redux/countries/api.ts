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
