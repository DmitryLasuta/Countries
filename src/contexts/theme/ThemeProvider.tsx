import { useLayoutEffect } from 'react'
import ThemeContext from './theme.context'
import useLocalStorage from '@hooks/useLocalStorage'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
