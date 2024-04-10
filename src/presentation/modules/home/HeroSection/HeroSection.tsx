import { Burguer } from '../Burguer/Burguer'
import { Navigation } from '../Navigation/Navigation'
import * as S from './HeroSection.styled'
export function HeroSection(){
    return(
      <S.Container>
        <S.Logo src={'/logo.png'} alt="logo"/>
        <Burguer/>
        <S.InfoSamirContainer>
            <S.TextPresentation>
                <h2>Hello, I am</h2>
                <S.NameBox>
                    <S.Nome>Samir Andrade</S.Nome>
                </S.NameBox>
                <h2>Full Stack developer</h2>
            </S.TextPresentation>
            {[...Array(30)].map((_, $index) => (
              <S.FluidLetters
              key={$index}
              src={'/letrasNome.svg'}
              alt=""
              index={$index}
              />
            ))}
            <S.SamirImg 
                src={'/samiii.png'}
                alt={'imagem samir'} 
                width={372}
                height={372}/>
        </S.InfoSamirContainer>
        <S.Ellipse src="/Ellipse.svg" alt="" />
        <Navigation/>
      </S.Container>
    )
  }