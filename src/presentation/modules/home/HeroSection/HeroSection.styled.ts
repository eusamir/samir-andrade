'use client'

import styled, { css, keyframes } from "styled-components";

const moveDown2 = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(4200%);
  }
`;

interface FluidLettersProps {
  index: number;
}


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 851px;
    background: #160054;
    justify-content: center;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    scrollbar-color: red;
`

export const NameBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 114px;
    width: 620px;
    background-color: #FFD749;
    border-radius: 10px;
`
export const Nome = styled.h1`
    width: 100%;
    font-weight: 700;
    font-size: 5rem;
    color: #160054;
`

export const InfoSamirContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 300px;
    margin-right:10rem;
`
export const TextPresentation = styled.div`
    color: white;
    font-weight: 700;
    font-size: 3rem;
`

export const Logo = styled.img`
    position: absolute;
    padding: 5rem;
    top: 0;
    left: 0;
`

export const RighSection = styled.div`
    display: block;
`
export const FluidLetters = styled.img<FluidLettersProps>`
    position: absolute;
    z-index: 0; 
    left: 62%;
    top: 0;
    animation: ${moveDown2} 100s linear infinite;
    ${({ index }) => css`
        margin-top: calc(${index} * -19rem - 19rem);
    `}
`
export const SamirImg = styled.img`
    position: relative;
    z-index: 1;
`

export const Ellipse = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%; 
    transform: translateX(-50%); 
`
export const Teste = styled.div`
    height:100px;
`