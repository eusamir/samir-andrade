import * as S from './Footer.styled'

export function Footer(){
  return(
    <S.Container id='footer'>
      <S.LeftSection>
        <S.Title>Say hello!</S.Title>
        <S.SocialMediaContainer>
          <div>
            <img src='/Envelope.svg' alt='google icon'/>
            <S.Social>samirandradee@gmail.com</S.Social>
          </div>
          <div>
            <img src="/LinkedinLogo.svg" alt="linkedin logo" />
            <S.Social>
              in/samir-andrade
            </S.Social>
          </div>
        </S.SocialMediaContainer>
      </S.LeftSection>
      <S.RightSection>
        <p>Developed by</p>
        <img src="/logoBranca.svg" alt="" />
      </S.RightSection>
    </S.Container>
  )
}
