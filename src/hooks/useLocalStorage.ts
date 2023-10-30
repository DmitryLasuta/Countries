import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() =>
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : initialValue
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}
