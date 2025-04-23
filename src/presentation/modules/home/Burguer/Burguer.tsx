'use client'

import { useState } from 'react'
import * as S from './Burguer.styled'
import Tilt from 'react-parallax-tilt'
import {
  GithubLogo,
  GoogleLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'

interface BurguerProps {
  $currentSection: string
}

export function Burguer({ $currentSection }: BurguerProps) {
  const [activeBurguer, isActiveBurguer] = useState(false)

  function handleBurguerMenu() {
    isActiveBurguer(!activeBurguer)
    console.log(activeBurguer)
  }
  return (
    <>
      <S.Container
        $test={activeBurguer}
        onClick={handleBurguerMenu}
        $currentSection={$currentSection}
      >
        <S.FirstBar $test={activeBurguer} $currentSection={$currentSection} />
        <S.SecondBar $test={activeBurguer} $currentSection={$currentSection} />
      </S.Container>
      <S.BurgerActive $test={activeBurguer}>
        <Tilt>
          <S.BorderWrapper>
            <S.BurgerContent>
              <S.Link href="#aboutMe">Experiências</S.Link>
              <S.Link href="#tecsUsed">Hard skills</S.Link>
              <S.Link href="#projectSection">Projetos</S.Link>

              <S.ContactMe>Fale comigo aqui</S.ContactMe>
              <S.ButtonContainer>
                <S.SocialLink href="https://github.com/eusamir">
                  <S.ButtonSocial>
                    <GithubLogo color="#9747ff" size={30} weight="fill" />
                  </S.ButtonSocial>
                </S.SocialLink>
                <S.SocialLink href="mailto:samirandradee@gmail.com">
                  <S.ButtonSocial>
                    <GoogleLogo color="#9747ff" size={30} weight="fill" />
                  </S.ButtonSocial>
                </S.SocialLink>
                <S.SocialLink href="https://www.linkedin.com/in/samir-andrade/">
                  <S.ButtonSocial>
                    <LinkedinLogo color="#9747ff" size={30} weight="fill" />
                  </S.ButtonSocial>
                </S.SocialLink>
                <S.SocialLink href="https://wa.me/5598991962197?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.">
                  <S.ButtonSocial>
                    <WhatsappLogo color="#9747ff" size={30} weight="fill" />
                  </S.ButtonSocial>
                </S.SocialLink>
              </S.ButtonContainer>
            </S.BurgerContent>
          </S.BorderWrapper>
        </Tilt>
      </S.BurgerActive>
    </>
  )
}
