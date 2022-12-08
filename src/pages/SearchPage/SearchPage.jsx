import { useContext, useState } from 'react'
import Filters from '../../components/Filters/Filters'
import Card from '../../components/Card/Card'
import useCountries from '../../Providers/CountriesProvider'
import { Wrapper, CardsList, LoadingWrapper } from './SearchPage.styles'
import { ReactComponent as LoadingIcon } from '../../assets/loading.svg'

function SearchPage() {
  const [selectedValue, setSelectedValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const { countries, state } = useCountries()

  const handleSelectedItemChange = ({ selectedItem }) =>
    setSelectedValue(selectedItem)

  let content
  if (state === 'loading') {
    content = (
      <LoadingWrapper>
        <LoadingIcon />
        Loading...
      </LoadingWrapper>
    )
  } else if (state === 'resolved') {
    const list = countries
      .filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      )
      .filter((country) => {
        return country.continents.some((continent) =>
          continent.toLowerCase().includes(selectedValue.toLowerCase())
        )
      })
      .map((country) => <Card country={country} key={country.name.common} />)
    content = <CardsList>{list}</CardsList>
  } else {
    content = <h2>Error...</h2>
  }

  return (
    <Wrapper>
      <Filters
        selectedValue={selectedValue}
        handleSelectedItemChange={handleSelectedItemChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {content}
    </Wrapper>
  )
}

export default SearchPage
