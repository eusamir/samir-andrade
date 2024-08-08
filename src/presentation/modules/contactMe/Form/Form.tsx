'use client'
import { PaperPlane } from 'react-ionicons'
import * as S from './Form.styled'
export function Form(){
  return(
    <form>
      <div>
        <S.Input type="text" name="" placeholder="Your name"/>
        <S.Input type="text" name="" placeholder="Your email"/>
      </div>
      <textarea placeholder="Your message">
      </textarea>
      <S.Button>
        Send
        <PaperPlane color={'#ffff'}/>
      </S.Button>
    </form>
  )
}
