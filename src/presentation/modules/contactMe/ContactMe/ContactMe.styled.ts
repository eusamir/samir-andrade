'use client'
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
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
`
export const Description = styled.p`
  font-size: 1.3rem;
  color: black;
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
