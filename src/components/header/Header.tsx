import lightThemeIcon from '/light-mode-icon.svg'
import darkThemeIcon from '/dark-mode-icon.svg'

import classesList from './styles.module.css'

import useThemeContext from '@contexts/theme/useThemeContext'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { HamburgerButton } from './hamburgerButton'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { logOut } from '@redux/auth'

const setActiveClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? classesList['header__nav-link--active'] : ''

export default function Header() {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false)
  const handleNavListClick = () => setHamburgerIsActive(!hamburgerIsActive)

  const { theme, changeTheme } = useThemeContext()
  const { isLoggedIn } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogOutClick = () => {
    dispatch(logOut())
    navigate('/', { replace: true })
  }

  return (
    <header className={classesList.header}>
      <div className="container">
        <div className={classesList.header__content}>
          <NavLink to="/" className={classesList.header__title}>
            where is the world?
          </NavLink>

          <nav
            className={`${classesList.header__nav} ${
              hamburgerIsActive && classesList['header__nav--active']
            }`}
          >
            <ul className={classesList['header__nav-list']} onClick={handleNavListClick}>
              <li>
                <NavLink className={setActiveClass} to="/">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink className={setActiveClass} to="/AllCountries">
                  Countries
                </NavLink>
              </li>

              <li>
                {isLoggedIn ? (
                  <button onClick={handleLogOutClick} type="button">
                    log out
                  </button>
                ) : (
                  <NavLink className={setActiveClass} to="/logIn">
                    log in
                  </NavLink>
                )}
              </li>
            </ul>
          </nav>

          <button
            className={classesList['header__theme-btn']}
            onClick={changeTheme}
            type="button"
          >
            <img
              src={theme === 'light' ? lightThemeIcon : darkThemeIcon}
              height={30}
              width={30}
              alt=""
            />
            <span className={classesList['header__theme-btn-text']}>
              {theme === 'dark' ? 'Dark' : 'Light'} theme
            </span>
          </button>
          <HamburgerButton
            isActive={hamburgerIsActive}
            handleClick={handleNavListClick}
          />
        </div>
      </div>
    </header>
  )
}
