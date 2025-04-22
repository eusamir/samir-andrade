'use client'

import { useEffect, useState } from 'react'
import { Burguer } from '../Burguer/Burguer'
import * as S from './Header.styled'
export function Header() {
  const [currentSectionId, setCurrentSectionId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      root: null,
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSectionId(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo
          src="/logoRoxa.svg"
          alt="logo"
          $isVisible={currentSectionId === 'hero'}
        />
        <S.Logo
          src="/logoMobile.svg"
          alt="logo"
          $isVisible={currentSectionId === 'hero'}
          $isMobile
        />
        <S.Logo
          src="/logoBrancoS.svg"
          alt="logo"
          $isVisible={currentSectionId === 'aboutMe'}
        />
        <S.Logo
          src="/logoMobileWhite.svg"
          alt="logo"
          $isVisible={currentSectionId === 'aboutMe'}
          $isMobile
        />
        <S.Logo
          src="/logoRoxaS.svg"
          alt="logo"
          $isVisible={currentSectionId === 'tecsUsed'}
        />
        <S.Logo
          src="/logoMobileRoxa.svg"
          alt="logo"
          $isVisible={currentSectionId === 'tecsUsed'}
          $isMobile
        />
        <S.Logo
          src="/logoBrancoS.svg"
          alt="logo"
          $isVisible={currentSectionId === 'projectSection'}
        />
        <S.Logo
          src="/logoMobileWhite.svg"
          alt="logo"
          $isVisible={currentSectionId === 'projectSection'}
          $isMobile
        />
        <S.Logo
          src="/logoPretaS.svg"
          alt="logo"
          $isVisible={currentSectionId === 'contactMe'}
        />
        <S.Logo
          src="/logoMobileBlack.svg"
          alt="logo"
          $isVisible={currentSectionId === 'contactMe'}
          $isMobile
        />
        <S.Logo
          src="/logoPretaS.svg"
          alt="logo"
          $isVisible={currentSectionId === 'footer'}
        />
        <S.Logo
          src="/logoMobileBlack.svg"
          alt="logo"
          $isVisible={currentSectionId === 'footer'}
          $isMobile
        />
      </S.LogoContainer>
      <Burguer $currentSection={currentSectionId} />
    </S.Container>
  )
}
