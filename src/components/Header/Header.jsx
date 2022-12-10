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
        {currentTheme === 'light' ? (
          <MoonIcon className="fill-lm-secondary" />
        ) : (
          <SunIcon className="fill-dm-secondary" />
        )}
        <span>{currentTheme === 'light' ? 'Dark': 'Light' } Mode</span>
      </button>
    </Wrapper>
  )
}
