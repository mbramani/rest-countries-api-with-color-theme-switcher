import { useState } from 'react'
import Filters from '../components/Filters/Filters'

function SearchPage({ countries, state }) {
  const [selectedValue, setSelectedValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleSelectedItemChange = ({ selectedItem }) =>
    setSelectedValue(selectedItem)

  return (
    <>
      <Filters
        selectedValue={selectedValue}
        handleSelectedItemChange={handleSelectedItemChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  )
}
export default SearchPage
