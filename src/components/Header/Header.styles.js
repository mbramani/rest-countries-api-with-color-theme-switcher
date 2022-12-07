import styled from "styled-components";
import tw from "twin.macro";


const Wrapper = styled.div`
 ${tw`flex h-20 flex-row px-2 md:px-[8%] justify-between items-center bg-lm-primary shadow-md dark:shadow-none dark:bg-dm-primary`}

 h1{
  ${tw`text-xl font-bold hover:cursor-pointer`}
 }

 button{
  ${tw`text-base font-normal tracking-wide flex items-center hover:cursor-pointer`}
  svg{
    ${tw`h-auto w-6 mr-1.5`}
  }
 }
`

export default Wrapper