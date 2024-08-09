import * as S from './Footer.styled'

export function Footer(){
  return(
    <S.Container id='footer'>
      <div>
        <S.Title>Say hello!</S.Title>
        <div>
          <S.Social>samirandradee@gmail.com</S.Social>
        </div>
        <div>
          <S.Social>
            in/samir-andrade
          </S.Social>
        </div>
      </div>
      <div>
        <p>Developed by</p>
        <img src="/logoBranca.svg" alt="" />
      </div>
    </S.Container>
  )
}
