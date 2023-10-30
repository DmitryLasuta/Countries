import { Header } from '@components/index'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container" style={{ padding: '3rem 25px' }}>
        <Outlet />
      </main>
    </>
  )
}
