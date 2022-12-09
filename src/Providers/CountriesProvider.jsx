import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react'

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

  const findCountryByName = useCallback(
    (name) => {
      if (!countries) return
      return countries.find((country) => country.name.common === name)
    },
    [countries]
  )

  const findByAltSpelling = (altSpelling) => {
    if (!countries) return
    return countries.find((country) => country.cca3 === altSpelling)
  }

  return (
    <CountryContext.Provider
      value={{ countries, state, findCountryByName, findByAltSpelling }}
    >
      {children}
    </CountryContext.Provider>
  )
}

const useCountries = () => {
  const { countries, state, findCountryByName, findByAltSpelling } =
    useContext(CountryContext)

  return {
    countries,
    state,
    findCountryByName,
    findByAltSpelling,
  }
}
export default useCountries
