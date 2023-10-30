import { useAppSelector } from '@hooks/useRedux'
import { Outlet, useLocation, Navigate } from 'react-router-dom'

export default function PrivateRouter() {
  const location = useLocation()
  const { isLoggedIn } = useAppSelector(state => state.auth)

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
