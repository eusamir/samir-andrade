import Link from 'next/link'
import * as S from './Card.styled'

interface CardProps{
    url: string,
    img: string
}

export default function Card({url,img}: CardProps){
    return(
        <Link href={url}>
            <S.Container>
                <img src={img} alt="" />
            </S.Container>
        </Link>
    )
}