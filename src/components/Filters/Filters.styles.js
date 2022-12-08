import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
${tw`w-full flex flex-col md:flex-row justify-between my-6 md:my-10`}
`

export const InputWrapper = styled.div`
${tw`flex items-center dark:bg-dm-primary w-full md:max-w-sm h-12 shadow-normal rounded font-normal `}

input{
  ${tw`focus:outline-none bg-lm-primary dark:bg-dm-primary w-full`}
}
svg{
  ${tw`mx-3`}
}
`
export const OptionWrapper = styled.div`
  ${tw`relative font-normal bg-lm-primary dark:bg-dm-primary md:w-48 my-2 md:mx-0`}
`;

export const StyledButton = styled.button`
${tw`w-48 h-12 rounded text-left px-4 shadow-normal`}
`
export const DropdownMenu = styled.ul`
${tw`absolute top-14 w-48 bg-lm-primary dark:bg-dm-primary rounded shadow-normal`}
`
export const MenuItem = styled.li`
${tw`text-left px-4 py-2 hover:bg-lm-base dark:hover:bg-dm-base cursor-pointer`}
`