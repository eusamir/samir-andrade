import * as S from './Card.styled'

interface CardProps{
  card:{
    img: string
    title: string
    description: string
    tecs: string[]
    url: string
  }
}

export function Card({card}:CardProps){
  return(
    <S.Container>
      <S.HeaderContainer>
        <S.Image/>
        <S.Title>{card.title}</S.Title>
      </S.HeaderContainer>
      <S.InfoContainer>
        <S.Description>{card.description}{card.tecs}</S.Description>
        <S.Link>{card.url}</S.Link>
      </S.InfoContainer>
    </S.Container>
  )
}
