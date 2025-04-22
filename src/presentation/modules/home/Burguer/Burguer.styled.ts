'use client'

import styled from 'styled-components'

interface Burgerprops {
  $test: boolean
  $currentSection?: string
}

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

export const BurgerActive = styled.div<Burgerprops>`
  display: flex;
  background-color: ${(props) => (props.$test ? 'white' : '')};
  width: 300px;
  height: 380px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99999999;
  margin-top: 3rem;
  margin-right: 2rem;
  opacity: ${(props) => (props.$test ? '1' : '0')};

  flex-direction: column;
  padding-top: 3rem;
  padding-left: 1.5rem;

  transform-origin: top right;

  box-shadow: 10px 4px 4px 4px rgba(0, 0, 0, 0.2);

  border-radius: 2rem;

  transition: 0.3s ease-in-out;
  visibility: ${(props) => (props.$test ? 'visible' : 'hidden')};
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
  color: #9549e1;
  &:hover {
    opacity: 0.8;
  }
`

export const ContactMe = styled.h1`
  font-weight: 500;
  padding: 1rem;
  opacity: 0.3;
`

export const LinkContact = styled.a`
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.3rem;
  color: #9549e1;

  &:hover {
    opacity: 0.8;
  }
`
