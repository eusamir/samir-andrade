import InfinityScrolling from '../InfinityScrolling/InfinityScrolling'
import * as S from './HeroSection.styled'
export function HeroSection() {
  return (
    <S.Container id="hero">
      <S.InfoSamirContainer>
        <S.TextPresentation>
          <h2>Olá, eu sou</h2>
          <S.NameBox>
            <S.Nome>Samir Andrade</S.Nome>
          </S.NameBox>
          <S.LevelTag>
            <h2>Full Stack developer</h2>
          </S.LevelTag>
        </S.TextPresentation>
        <S.SamirImg src={'/samiii.svg'} alt={'imagem samir'} />
        <S.LetrasWrapper>
          {[...Array(20)].map((_, linhaIndex) => (
            <S.LinhaAnimada key={linhaIndex}>
              {[...Array(30)].map((_, letraIndex) => (
                <img key={letraIndex} src="/mobileLetras.svg" alt="" />
              ))}
            </S.LinhaAnimada>
          ))}
        </S.LetrasWrapper>
      </S.InfoSamirContainer>
      <InfinityScrolling />
      <S.Ellipse src="/fundoHero.svg" alt="" />
    </S.Container>
  )
}
