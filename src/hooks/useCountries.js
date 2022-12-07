import { useEffect, useState } from 'react'

function useCountries() {
  const [countries, setCountries] = useState(null)
  const [state, setState] = useState('loading')
  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,flags,cca3,continents,tld,currencies,languages,borders'
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data), setState('resolved')
      })
      .catch((error) => {
        setState('error'), console.error(error)
      })
  }, [])

  const getCountry = (countryName) =>
    countries.find(
      (country) => country.name.common.toLowerCase() === countryName
    )

  return { countries, getCountry, state }
}

export default useCountries
