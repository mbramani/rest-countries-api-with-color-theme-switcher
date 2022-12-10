import styled from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`px-4 md:px-12 py-6 md:py-14`}
`
export const InfoWrapper = styled.div`
  ${tw`w-full grid grid-cols-1 md:grid-cols-2 gap-12`}

  img {
    ${tw`w-full items-center justify-self-center max-w-xl`}
  }
`

export const Info = styled.div`
  ${tw`max-w-lg grid grid-cols-1 md:grid-cols-2 gap-8`}

  h2 {
    ${tw`font-bold text-3xl col-span-1 md:col-span-2 m-0 items-end`}
  }

  div:nth-of-type(1),
  div:nth-of-type(2) {
    ${tw`col-span-2 md:col-span-1 align-baseline`}
  }
`

export const StyledBorderCountries = styled.div`
  ${tw`col-span-2 flex items-start gap-2 text-base font-bold`}
`

export const BorderCountryList = styled.div`
  ${tw`h-full flex items-start gap-2 flex-wrap font-normal text-sm`}
`

export const StyledButton = styled.button`
  ${tw`inline-block bg-lm-primary dark:bg-dm-primary border-0 py-2 px-8 cursor-pointer shadow-normal rounded
    tracking-wider no-underline mb-12 h-12
  `}
`
export const LoadingWrapper = styled.div`
  ${tw`flex justify-center items-center mx-auto w-full h-96 text-3xl`}
  svg {
    ${tw`animate-spin h-7 w-7 fill-lm-secondary dark:fill-dm-secondary border-none mr-2`}
    circle {
      ${tw`fill-lm-base dark:fill-dm-base`}
    }
    path {
      ${tw`text-dm-primary`}
    }
  }
`
