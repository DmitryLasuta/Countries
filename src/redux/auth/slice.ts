import { createSlice } from '@reduxjs/toolkit'
import { AUTH_STORAGE_KEY } from './constants'

const initialState: { isLoggedIn: boolean } = {
  isLoggedIn: localStorage.getItem(AUTH_STORAGE_KEY) === 'true',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: state => {
      state.isLoggedIn = true
    },
    logOut: state => {
      state.isLoggedIn = false
    },
  },
})
