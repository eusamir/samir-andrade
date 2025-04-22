'use client'
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #F9F9F9;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
  z-index: 0;
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: black;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const Description = styled.p`
  font-size: 1.3rem;
  color: black;
  font-weight: 400;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 300px;
    align-self: center;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`
