'use client'

import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: black;
    justify-content: center;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    z-index: 0;
`
export const Image = styled.img`
    width: 500px;
    height: 500px;
    margin-right: 12rem;

`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
`
export const Paragraph = styled.p`
    color: white;
    font-weight: 500;
    inline-size: 700px;
    text-align: justify;
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 20rem;
`
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LetterImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -1.7rem;
  width: 47vw;
`
export const RightSection = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 105rem;
`