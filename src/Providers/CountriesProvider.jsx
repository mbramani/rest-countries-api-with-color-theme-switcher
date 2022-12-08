import { useState, useEffect, createContext, useContext } from 'react'

const CountryContext = createContext({})

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState(null)
  const [state, setState] = useState('loading')

  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders'
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.sort((a, b) => b.population - a.population)),
          setState('resolved')
      })
      .catch((error) => {
        setState('error'), console.error(error)
      })
  }, [])

  const getCountry = (countryName) =>
    countries.find(
      (country) => country.name.common.toLowerCase() === countryName
    )

  return (
    <CountryContext.Provider value={{ countries, state, getCountry }}>
      {children}
    </CountryContext.Provider>
  )
}

const useCountries = () => {
  const { countries, getCountry, state } = useContext(CountryContext)

  return {
    countries,
    getCountry,
    state,
  }
}
export default useCountries
