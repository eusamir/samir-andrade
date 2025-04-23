'use client'

import { useEffect, useState } from 'react'
import { Burguer } from '../Burguer/Burguer'
import { motion } from 'framer-motion'
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
          as={motion.img}
          src="/logoRoxa.svg"
          alt="logo"
          $isVisible={currentSectionId === 'hero'}
          initial={{ opacity: 0, x: -100 }}
          animate={
            currentSectionId === 'hero'
              ? { opacity: 1, x: [-100, 30, 0] }
              : { opacity: 0, x: -100 }
          }
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <S.Logo
          as={motion.img}
          src="/logoMobile.svg"
          alt="logo"
          $isVisible={currentSectionId === 'hero'}
          initial={{ opacity: 0, x: -100 }}
          animate={
            currentSectionId === 'hero'
              ? { opacity: 1, x: [-100, 30, 0] }
              : { opacity: 0, x: -100 }
          }
          transition={{ duration: 1, ease: 'easeInOut' }}
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
