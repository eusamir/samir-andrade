import * as S from './InifinityScrolling.styled'
export default function InfinityScrolling(){
  return(
    <>
      {[...Array(30)].map((_, $index) => (
              <S.FluidLetters
              key={$index}
              src={'/letrasNome.svg'}
              alt=""
              $index={$index}
              />
            ))}
    </>
  )
}
