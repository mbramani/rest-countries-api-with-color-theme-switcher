import { useMemo } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import useCountries from '../../Providers/CountriesProvider'
import SingleInfo from '../../components/SingleInfo/SingleInfo'
import BorderCountry from '../../components/BorderCountry/BorderCountry'
import { ReactComponent as LoadingIcon } from '../../assets/loading.svg'
import {
  StyledBorderCountries,
  BorderCountryList,
  Info,
  InfoWrapper,
  StyledButton,
  Wrapper,
  LoadingWrapper,
} from './CountryDetails.styles'

const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

function CountryDetails() {
  const { name } = useParams()
  let navigate = useNavigate()
  const { findCountryByName, findByAltSpelling } = useCountries()

  const country = useMemo(
    () => findCountryByName(name),
    [findCountryByName, name]
  )

  const handleBackButton = () => navigate(-1)

  const prepareLanguages = (languages) => {
    if (!languages) return
    return Object.values(languages)
  }

  const prepareCurrencies = (currency) => {
    if (!currency) return
    return Object.values(currency).map((curr) => curr.name)
  }

  return (
    <Wrapper>
      <StyledButton onClick={handleBackButton}>Back</StyledButton>
      {country ? (
        <InfoWrapper>
          <img src={country.flags.svg} alt={country.common} />
          <Info>
            <h2>{country.name.common}</h2>
            <div>
              <SingleInfo
                title="Native Name"
                stat={Object.values(country.name.nativeName)[0]?.common}
              />
              <SingleInfo
                title="Population"
                stat={numberWithCommas(country.population)}
              />
              <SingleInfo title="Region" stat={country.continents?.[0]} />
              <SingleInfo title="Sub Region" stat={country.subregion} />
              <SingleInfo title="Capital" stat={country.capital} />
            </div>
            <div>
              <SingleInfo title="Top Level Domain" stat={country.tld} />
              <SingleInfo
                title="Currencies"
                stat={prepareCurrencies(country.currencies)}
                isArray
              />
              <SingleInfo
                title="Languages"
                stat={prepareLanguages(country.languages)}
                isArray
              />
            </div>
            {country.borders ? (
              <StyledBorderCountries>
                <div>Border Countries:</div>
                <BorderCountryList>
                  {country.borders.map((altSpelling) => {
                    const countryByAlt = findByAltSpelling(altSpelling)
                    return (
                      <BorderCountry
                        name={countryByAlt.name.common}
                        key={countryByAlt.name.common}
                      />
                    )
                  })}
                </BorderCountryList>
              </StyledBorderCountries>
            ) : null}
          </Info>
        </InfoWrapper>
      ) : (
        <LoadingWrapper>
          <LoadingIcon />
          Loading...
        </LoadingWrapper>
      )}
    </Wrapper>
  )
}
export default CountryDetails
