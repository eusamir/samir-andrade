'use client'
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #160054;
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
  color: #1C0D79;
  background-color: #FFD749;
  border-radius: 1.4rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    filter: brightness(0.9);
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
`
export const CarouselContainer = styled.div`
  display: flex;
  margin-left: 30rem;
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
`
export const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem
`
