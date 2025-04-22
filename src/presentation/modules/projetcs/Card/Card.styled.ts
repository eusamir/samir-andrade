'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color:#F9F9F9; */
  width: 380px;
  height: 280px;
  border-radius: 32px;
  cursor: grab;
  user-select: none;
  &:active {
    cursor: grabbing;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 220px;
  }
`
export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  z-index: 1;
  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const Description = styled.p`
  font-weight: 500;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
export const Link = styled.a`
  position: absolute;
  bottom: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #1c0d79;
  padding: 0.5rem 0.5rem 1rem 0;
  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
  @media (max-width: 768px) {
    bottom: 0.5rem;
    font-size: 0.8rem;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #f9f9f9;
  height: 130px;
  border-radius: 1rem 1rem 0 0;
  z-index: 99999999999;
  overflow: hidden;
`
export const InfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding-left: 1rem;
  height: 140px;
  border-radius: 0 0 1rem 1rem;
  z-index: 99999999999;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-right: 1rem;
  }
`
export const LogoTec = styled.img`
  width: 30px;
  height: 30px;
  filter: brightness(0) saturate(100%) invert(16%) sepia(50%) saturate(2699%)
    hue-rotate(234deg) brightness(90%) contrast(128%);
`
export const ImageContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const CardLetterLeft = styled.img`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  margin-left: 5rem;

  @media (min-width: 1600px) {
    margin-left: 3rem;
  }
  @media (max-width: 768px) {
    margin-left: 5.2rem;
  }
`
export const CardLetterRight = styled.img`
  position: absolute;
  z-index: 0;
  right: 0;
  top: 0;
  margin-right: 5rem;
  @media (min-width: 1600px) {
    margin-right: 3rem;
  }
  @media (max-width: 768px) {
    margin-right: 5.2rem;
  }
`
