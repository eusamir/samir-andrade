'use client'

import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #F9F9F9;
    justify-content: center;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    z-index: 0;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`

export const Paragraph = styled.p`
  font-weight: 500;
  inline-size: 700px;
  text-align: justify;
`

export const Location = styled.div`
  display: flex;
  gap:5px;
  font-weight: 500;
  font-size: 1.15rem;
  align-items: center;
  margin-top: 1rem;
`

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  padding: 0 0 13rem 5rem;
`
export const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: -15rem;
  width: 70vw;
  height: 80vh;
`
