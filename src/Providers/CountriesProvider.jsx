import { createContext } from 'react'
import useCountries from '../hooks/useCountries'
const CountryContext = createContext({})

function CountriesProvider({ children }) {
  const { countries, state, getCountry } = useCountries()
  return (
    <CountryContext.Provider value={{ countries, state, getCountry }}>
      {children}
    </CountryContext.Provider>
  )
}

export default CountriesProvider
