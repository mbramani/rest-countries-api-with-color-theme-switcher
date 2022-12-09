import styled from 'styled-components'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`w-full h-full flex flex-col bg-lm-primary dark:bg-dm-primary rounded-lg shadow-normal transition ease-in duration-100 hover:scale-105`}

  img {
    ${tw`block rounded-t-lg overflow-hidden w-full h-44 object-cover`}
  }

  div {
    ${tw`p-2 text-lm-secondary dark:text-dm-secondary`}
  }
  h3 {
    ${tw`text-base font-bold`}
  }
  p {
    ${tw`opacity-80 tracking-widest	text-sm my-1.5 mx-0 font-normal`}

    span {
      ${tw`font-medium`}
    }
  }
`

export const StyledLink = styled(Link)`
  ${tw`w-full no-underline`}
`
