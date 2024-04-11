'use client'

import { useState } from 'react'
import * as S from './Burguer.styled'

export function Burguer(){
    const [activeBurguer, isActiveBurguer] = useState(false)

    function handleBurguerMenu(){
        isActiveBurguer(!activeBurguer)
        console.log(activeBurguer)
    }
    return (
        <>
            <S.Container $test={activeBurguer} onClick={handleBurguerMenu}>
                <S.FirstBar $test={activeBurguer}/>
                <S.SecondBar $test={activeBurguer}/>
            </S.Container>
            <S.BurgerActive $test={activeBurguer}>
                <S.Link href="#">My Work</S.Link>
                <S.Link href="#">My Shelf</S.Link>
                <S.Link href="#">My Curriculum</S.Link>

                <S.ContactMe>SAY HELLO</S.ContactMe>
                <S.LinkContact href="#">samirandradee@gmail.com</S.LinkContact >
                <S.LinkContact  href="https://telegram.org/">https://telegram.org/samir</S.LinkContact>
            </S.BurgerActive>
        </>
    )
}
