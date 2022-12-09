import { Wrapper, StyledLink } from './Card.styles'

export default function Card({ country }) {
  const {
    name: { common },
    capital,
    continents: [continent],
    population,
    flags: { svg },
  } = country

  return (
    <Wrapper>
      <StyledLink to={`country/${common}`}>
        <img src={svg} alt={common} loading="lazy" />
        <div>
          <h3>{common}</h3>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {continent}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </StyledLink>
    </Wrapper>
  )
}
