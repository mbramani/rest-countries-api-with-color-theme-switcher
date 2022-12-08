import Wrapper from './Header.styles'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as MoonIcon } from '../../assets/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'

export default function Header({ currentTheme, toggleTheme }) {
  const navigate = useNavigate()

  const gotoHome = () => {
    navigate('/')
  }
  return (
    <Wrapper>
      <h1 onClick={gotoHome}>Where in the world?</h1>
      <button onClick={toggleTheme}>
        {currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
        <span>{currentTheme === 'light' ? 'Light' : 'Dark'} Mode</span>
      </button>
    </Wrapper>
  )
}
