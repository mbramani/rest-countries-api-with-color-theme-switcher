import { useSelect } from 'downshift'
import {
  Wrapper,
  InputWrapper,
  OptionWrapper,
  StyledButton,
  DropdownMenu,
  MenuItem,
} from './Filters.styles'
import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import useTheme from '../../hooks/useTheme'

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
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: selectedValue,
    onSelectedItemChange: handleSelectedItemChange,
  })

  const { theme } = useTheme()
  return (
    <Wrapper>
      <InputWrapper>
        <SearchIcon />
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
                isHighlighted={highlightedIndex === index}
                theme={theme}
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
