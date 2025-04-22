'use client'

import { useState } from 'react'
import * as S from './Burguer.styled'

interface BurguerProps{
    $currentSection: string
}

export function Burguer({$currentSection}:BurguerProps){
    const [activeBurguer, isActiveBurguer] = useState(false)

    function handleBurguerMenu(){
        isActiveBurguer(!activeBurguer)
        console.log(activeBurguer)
    }
    return (
        <>
            <S.Container $test={activeBurguer} onClick={handleBurguerMenu} $currentSection={$currentSection}>
                <S.FirstBar $test={activeBurguer} $currentSection={$currentSection}/>
                <S.SecondBar $test={activeBurguer} $currentSection={$currentSection}/>
            </S.Container>
            <S.BurgerActive $test={activeBurguer}>
                <S.Link href="#aboutMe">Experiências</S.Link>
                <S.Link href="#tecsUsed">Hard skills</S.Link>
                <S.Link href="#projectSection">Projetos</S.Link>

                <S.ContactMe>DIGA OLÁ!</S.ContactMe>
                <S.LinkContact href="mailto:samirandradee@gmail.com">samirandradee@gmail.com</S.LinkContact >
                <S.LinkContact  href="https://wa.me/5598991962197?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.">Fale comigo no WhatsApp</S.LinkContact>
                <S.LinkContact href="https://www.linkedin.com/in/samir-andrade/">Linkedin!</S.LinkContact >
            </S.BurgerActive>
        </>
    )
}
