'use client'
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #1C0D79;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    z-index: 0;
    justify-content: center;
    align-items: center;
`
export const Button = styled.button`
  width: 280px;
  padding: 1rem;
  color: #1C0D79;
  background-color: #FFD749;
  border-radius: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover{
    filter: brightness(0.9);
  }
`
export const Title = styled.h1``
export const CarouselContainer = styled.div`
  display: flex;
  margin-left: 20rem;
`
export const Slider = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
`
