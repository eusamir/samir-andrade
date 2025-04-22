import { Header } from '../Header/Header'
import InfinityScrolling from '../InfinityScrolling/InfinityScrolling'
import { Navigation } from '../Navigation/Navigation'
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
        <S.SamirImg
          src={'/samiii.svg'}
          alt={'imagem samir'}
        />
        <S.MobileLetras
          src={'/mobileLetras.svg'}
        />
      </S.InfoSamirContainer>
      <InfinityScrolling />
      <S.Ellipse src="/fundoHero.svg" alt="" />
    </S.Container>
  )
}
