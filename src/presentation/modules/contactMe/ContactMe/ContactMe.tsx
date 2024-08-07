import * as S from './ContactMe.styled'
import { Form } from "../Form/Form";

export function ContactMe(){
  return(
    <S.Container id='contactMe'>
      <S.HeaderContainer>
        <S.Title>Send me a message!</S.Title>
        <S.Description>Feel free to ask a question, share a proposal or simply drop a greeting!</S.Description>
      </S.HeaderContainer>
      <Form/>
    </S.Container>
  )
}
