import { createContext } from 'react'

type ThemeContextType = {
  theme: 'light' | 'dark'
  changeTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
})

export default ThemeContext
