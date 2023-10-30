import { RootState } from '@redux/store'
import { AUTH_STORAGE_KEY } from '../constants'
import { AuthActions } from '../types'
import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'

export function persistAuthStateMiddleware(
  store: MiddlewareAPI<Dispatch<AuthActions>, RootState>
) {
  return (next: Dispatch<AuthActions>) => (action: AuthActions) => {
    const { auth } = store.getState()
    localStorage.setItem(AUTH_STORAGE_KEY, String(auth.isLoggedIn))
    return next(action)
  }
}
