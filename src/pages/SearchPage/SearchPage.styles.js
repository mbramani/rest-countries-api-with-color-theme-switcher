import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`px-4 md:px-12 py-6 md:py-14`}
`
export const CardsList = styled.div`
  ${tw`w-full grid items-center justify-evenly gap-x-6 gap-y-6 md:gap-y-8 md:gap-x-14  grid-cols-[repeat(auto-fill, 320px)]`}
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
