import * as S from './ContactMe.styled'
import { Form } from '../Form/Form'

export function ContactMe() {
  return (
    <S.Container id="contactMe">
      <S.HeaderContainer>
        <S.Title>Fale comigo!</S.Title>
        <S.Description>
          Sinta-se livre para mandar um alô, enviar uma proposta ou então marcar
          uma reunião!
        </S.Description>
      </S.HeaderContainer>
      <Form />
    </S.Container>
  )
}
