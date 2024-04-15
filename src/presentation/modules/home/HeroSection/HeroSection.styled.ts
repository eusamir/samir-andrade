'use client'

import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 851px;
    background: #160054;
    justify-content: center;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    z-index: 1;
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

export const RighSection = styled.div`
    display: block;
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

export const RightSection = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 105rem;
`
