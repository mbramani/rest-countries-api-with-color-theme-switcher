import { StyledSingleInfo } from './SingleInfo.styles'

export default function SingleInfo({ title, stat, isArray }) {
  return (
    <StyledSingleInfo>
      <span>{title}: </span>
      {isArray ? stat.join(', ') : stat}
    </StyledSingleInfo>
  )
}
