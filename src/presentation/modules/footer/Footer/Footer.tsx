import * as S from './Footer.styled'
import { EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  return (
    <S.Container id="footer">
      <S.LeftSection>
        <S.Title>Diga olá!</S.Title>
        <S.SocialMediaContainer>
          <S.SocialContainer>
            <EnvelopeSimple size={30} color="#9877FF" />
            <S.Social>samirandradee@gmail.com</S.Social>
          </S.SocialContainer>
          <S.SocialContainer>
            <LinkedinLogo size={30} color="#9877FF" />
            <S.Social>in/samir-andrade</S.Social>
          </S.SocialContainer>
        </S.SocialMediaContainer>
      </S.LeftSection>
      <S.RightSection>
        <p>Developed by</p>
        <img src="/logoBranca.svg" alt="" />
      </S.RightSection>
    </S.Container>
  )
}
