import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AllCountries, Home, Layout, LogIn, NotFound, PrivateRouter } from './pages'
import CountryPage from './pages/countryPage/CountryPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />

        <Route element={<PrivateRouter />}>
          <Route path="/AllCountries">
            <Route index element={<AllCountries />} />
            <Route path=":commonName" element={<CountryPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
