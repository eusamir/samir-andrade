import * as S from './Card.styled'

interface CardProps {
  card: {
    img: string
    title: string
    description: string
    url: string
  }
}

export function Card({ card }: CardProps) {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Image src={card.img} />
        <S.Title>{card.title}</S.Title>
        <S.CardLetterLeft src={'/lettersCard.png'} />
        <S.CardLetterRight src={'/lettersCard.png'} />
      </S.HeaderContainer>
      <S.InfoContainer>
        <S.Description>{card.description}</S.Description>
        <S.Link href={card.url}>Olhar!</S.Link>
      </S.InfoContainer>
    </S.Container>
  )
}
