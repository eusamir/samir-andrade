'use client'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #5337a9;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
  z-index: 0;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  margin-top: 2rem;
  width: 17.5rem;
  padding: 1.2rem;
  color: #9877ff;
  background-color: #14092c;
  border: none;
  border-radius: 1.4rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  @media (max-width: 768px) {
    padding: 1rem;
    width: 16rem;
    font-size: 1rem;
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const CarouselContainer = styled.div`
  display: flex;
  margin-top: 15rem;
`
export const Slider = styled.div`
  display: flex;
  justify-content: center;
  width: 12.5rem;
`
export const Description = styled.p`
  font-size: 1.3rem;
  color: white;
  font-weight: 400;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 300px;
    text-align: center;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
  gap: 1rem;
`
export const Content = styled.div`
  width: 100vw;
`
