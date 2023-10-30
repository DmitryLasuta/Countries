import axios, { AxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'

export default function useFetch<T>(url: string) {
  const [fetchedData, setFetchedData] = useState<T[]>([])
  const [error, setError] = useState<AxiosError | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url)

      if (response.status === 200 && response.data) {
        setFetchedData(response.data)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) setError(error)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { fetchedData, setFetchedData, error }
}
