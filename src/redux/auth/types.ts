import { logIn, logOut } from './actions'

export type AuthActions = ReturnType<typeof logIn | typeof logOut>
