'use client'

import styled, { keyframes } from 'styled-components'

interface Burgerprops {
  $test: boolean
  $currentSection?: string
}

const animatedBorder = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`

const getBackgroundColor = (props: Burgerprops) => {
  if (props.$currentSection === 'hero' && props.$test === false) {
    return 'white'
  } else if (props.$currentSection === 'hero' && props.$test === true) {
    return '#9747ff'
  } else if (props.$currentSection === 'tecsUsed' && props.$test === false) {
    return '#9747ff'
  } else if (props.$currentSection === 'tecsUsed' && props.$test === true) {
    return '#9747ff'
  } else if (props.$currentSection === 'aboutMe' && props.$test === true) {
    return '#9747ff'
  } else if (
    props.$currentSection === 'projectSection' &&
    props.$test === true
  ) {
    return '#9747ff'
  } else {
    return 'white'
  }
}

export const Container = styled.div<Burgerprops>`
  display: ${(props) => {
    return props.$currentSection === 'contactMe' ||
      props.$currentSection === 'footer'
      ? 'none'
      : 'flex'
  }};
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-end;

  padding: 5rem 3rem;

  margin-right: 2rem;

  cursor: pointer;

  transition: all 1s;

  @media (max-width: 768px) {
    padding: 3.6rem 0;
  }
`

export const BorderWrapper = styled.div`
  padding: 3px;
  background: linear-gradient(
    270deg,
    rgba(20, 9, 44, 0.5),
    rgba(149, 73, 225, 0.5),
    rgba(20, 9, 44, 0.5),
    rgba(149, 73, 225, 0.5),
    rgba(20, 9, 44, 0.5)
  );
  background-size: 200% 200%;
  animation: ${animatedBorder} 6s linear infinite;
  border-radius: 2rem;
  overflow: visible;
  /* para deixar a parte interna sólida */
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 310px;
    margin-right: 2rem;
  }
`

export const BurgerContent = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(20, 9, 44, 0.9);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-left: 1.5rem;
  box-shadow: 10px 4px 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 999999;

  @media (max-width: 768px) {
    width: 280px;
    height: 300px;
  }
`
export const BurgerActive = styled.div<Burgerprops>`
  position: fixed;
  top: 3rem;
  right: 2rem;
  z-index: 99999999;
  opacity: ${(props) => (props.$test ? '1' : '0')};
  visibility: ${(props) => (props.$test ? 'visible' : 'hidden')};
  transition: 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 280px;
  }
`

export const FirstBar = styled.div<Burgerprops>`
  width: ${(props) => (props.$test ? '2rem' : '3rem')};
  height: 0.3rem;
  position: fixed;
  background-color: ${getBackgroundColor};
  border-radius: 2rem;
  transform: ${(props) =>
    props.$test ? 'rotate(45deg) translate(0.7rem, 0.4rem)' : ''};
  transition: ease-in-out 0.2s;
  z-index: 99999999999999999;

  @media (max-width: 768px) {
    width: ${(props) => (props.$test ? '1.6rem' : '2.2rem')};
    height: 0.2rem;
  }
`

export const SecondBar = styled.div<Burgerprops>`
  width: ${(props) => (props.$test ? '2rem' : '2rem')};
  height: 0.3rem;
  position: fixed;
  background-color: ${getBackgroundColor};
  margin-top: 10px;
  border-radius: 2rem;
  transform: ${(props) =>
    props.$test ? 'rotate(135deg) translate(-0.1rem, -0.3rem)' : ''};
  transition: ease-in-out 0.2s;
  z-index: 99999999999999999;

  @media (max-width: 768px) {
    width: ${(props) => (props.$test ? '1.6rem' : '2.2rem')};
    height: 0.2rem;
  }
`

export const Link = styled.a`
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.2rem;
  background: linear-gradient(to right, #9747ff, #fff 110%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 99999;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`

export const ContactMe = styled.h1`
  font-weight: 400;
  opacity: 0.6;
  color: #fff;
  font-size: 1.4rem;
  padding: 1rem 0;
`

export const LinkContact = styled.a`
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.3rem;
  color: #9549e1;
  width: fit-content;

  &:hover {
    opacity: 0.8;
  }
`
export const ButtonSocial = styled.div`
  pointer-events: auto;
  background-color: #fff;
  width: 20px;
  height: 20px;
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: 2.3px solid rgba(149, 73, 225, 0.5);
  &:hover {
    filter: brightness(0.6);
  }
`
export const SocialLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`
