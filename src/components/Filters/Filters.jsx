import { useSelect } from 'downshift'
import {
  Wrapper,
  InputWrapper,
  OptionWrapper,
  StyledButton,
  DropdownMenu,
  MenuItem,
} from './Filters.styles'
const items = ['', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

export default function Filters({
  selectedItem: selectedValue,
  handleSelectedItemChange,
  inputValue,
  setInputValue,
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: selectedValue,
    onSelectedItemChange: handleSelectedItemChange,
  })

  return (
    <Wrapper>
      <InputWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          placeholder="Search for a country..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </InputWrapper>
      <OptionWrapper>
        <StyledButton type="button" {...getToggleButtonProps()}>
          {selectedItem || 'Filter by Region'}
        </StyledButton>
        <DropdownMenu {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <MenuItem
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item || 'Filter by Region'}
              </MenuItem>
            ))}
        </DropdownMenu>
      </OptionWrapper>
    </Wrapper>
  )
}
