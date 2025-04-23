'use client'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  height: 25vh;
  justify-content: space-between;
  background-color: #0f0f19;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
  z-index: 0;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem;
    gap: 2rem;
  }
  @media (max-height: 700px) {
    height: 30vh;
  }
`
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bolder;
  color: white;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const Social = styled.p`
  color: white;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`
export const LeftSection = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0;
  }
`
export const RightSection = styled.div`
  display: flex;
  margin-right: 5rem;
  gap: 0.5rem;
  P {
    color: white;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  svg {
    flex-shrink: 0;
  }
`
