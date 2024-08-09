'use client'
import { PaperPlane } from 'react-ionicons'
import * as S from './Form.styled'
import Image from 'next/image'
export function Form(){
  return(
    <S.Form>
      <S.InputContainer>
        <S.Input type="text" name="" placeholder="Your name"/>
        <S.Input type="text" name="" placeholder="Your email"/>
      </S.InputContainer>
      <S.Textarea placeholder="Your message">
      </S.Textarea>
      <S.Button>
        Send
        <Image src='/PaperPlaneTilt.svg' alt='icon' width={25} height={25} style={{color:'white'}}/>
      </S.Button>
    </S.Form>
  )
}
