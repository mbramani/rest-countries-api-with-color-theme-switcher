import { Routes, Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ContentWrapper, GlobalStyles } from './styles'
import { CountriesProvider } from './Providers/CountriesProvider'
import useTheme from './hooks/useTheme'
import Header from './components/Header/Header'
import SearchPage from './pages/SearchPage/SearchPage'
import CountryDetails from './pages/CountryDetails/CountryDetails'

const AppWrapper = styled.div`
  ${tw`min-h-screen`}
`
function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <CountriesProvider>
      <GlobalStyles />
      <AppWrapper>
        <Header currentTheme={theme} toggleTheme={toggleTheme} />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="country/:name" element={<CountryDetails />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </CountriesProvider>
  )
}

export default App
