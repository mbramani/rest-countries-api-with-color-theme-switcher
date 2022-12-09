import { useNavigate } from 'react-router'
import { StyledBorderButton } from './BorderCountry.styles'

export default function BorderCountry({ name }) {
  let navigate = useNavigate()

  const handleClickOnBorderCountry = () =>
    navigate(`/country/${name}`, { replace: false })

  return (
    <StyledBorderButton onClick={handleClickOnBorderCountry}>
      {name}
    </StyledBorderButton>
  )
}
