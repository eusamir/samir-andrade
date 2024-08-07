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
        <S.Image src={card.img}/>
        <S.Title>{card.title}</S.Title>
        <div>
          <S.CardLetterLeft src={'/lettersCard.png'}/>
          <S.CardLetterRight src={'/lettersCard.png'}/>
        </div>
      </S.HeaderContainer>
      <S.InfoContainer>
        <S.Description>{card.description}</S.Description>
          <S.ImageContainer>
            {card.tecs.map((e)=>(
              <S.LogoTec src={e} key={card.title}/>
            ))}
          </S.ImageContainer>
        <S.Link href={card.url}>Check out!</S.Link>
      </S.InfoContainer>
    </S.Container>
  )
}
