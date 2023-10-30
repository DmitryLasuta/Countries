import { Middleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authReducer, persistAuthStateMiddleware } from './auth'
import { countriesApi, countriesReducer, countriesReducerPath } from './countries'

const rootReducer = combineReducers({
  auth: authReducer,
  [countriesReducerPath]: countriesReducer,
})

const middlewares: Middleware[] = [countriesApi.middleware, persistAuthStateMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
