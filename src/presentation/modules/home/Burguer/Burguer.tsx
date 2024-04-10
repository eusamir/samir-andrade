'use client'

import { useState } from 'react'
import * as S from './Burguer.styled'

export function Burguer(){
    const [active, isActive] = useState(false)

    function handleBurguerMenu(){
        isActive(!active)
        console.log(active)
    }
    return (
        <>
            <S.Container active={active} onClick={handleBurguerMenu}>
                <S.FirstBar active={active}/>
                <S.SecondBar active={active}/>
            </S.Container>
            <S.BurguerActive active={active}>
                <S.Link href="#">My Work</S.Link>
                <S.Link href="#">My Shelf</S.Link>
                <S.Link href="#">My Curriculum</S.Link>

                <S.ContactMe>SAY HELLO</S.ContactMe>
                <S.LinkContact href="#">samirandradee@gmail.com</S.LinkContact >
                <S.LinkContact  href="https://telegram.org/">https://telegram.org/samir</S.LinkContact>
            </S.BurguerActive>
        </>
    )
}