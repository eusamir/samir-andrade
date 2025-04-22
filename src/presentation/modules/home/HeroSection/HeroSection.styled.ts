'use client'

import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 851px;
  background: #0f0f19;
  justify-content: center;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
  z-index: 1;
  @media (max-width: 768px) {
    z-index: 9999;
  }
`

export const NameBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: fit-content;
  padding: 0 1rem;
  background: linear-gradient(to right, #9747ff, transparent 100%);
  @media (max-width: 768px) {
    z-index: 0;
  }
`
export const Nome = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 4.6rem;
  line-height: 0;
  color: #ffff;
  @media (max-width: 768px) {
    font-size: 2.8rem;
    z-index: 0;
  }
`

export const InfoSamirContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 0 0 5rem;
  z-index: 99999999999;
`
export const TextPresentation = styled.div`
  color: white;
  font-weight: 700;
  font-size: 3rem;
  h2 {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    position: absolute;
    top: 18%;
    left: 8%;
    h2 {
      font-size: 1.8rem;
    }
  }
`

export const RighSection = styled.div`
  display: block;
`
export const SamirImg = styled.img`
  position: absolute;
  left: 60%;
  top: 30%;
  width: 372px;
  height: 372px;

  @media (max-width: 768px) {
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    width: 250px;
    height: 250px;
  }
`
export const Ellipse = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1;
`
export const Teste = styled.div`
  height: 100px;
`
export const LevelTag = styled.div`
  background-color: #14092c;
  border: 1px solid #fff;
  border-radius: 2rem;
  width: fit-content;
  padding: 1.3rem 2.5rem;
  margin-top: 2rem;
  cursor: grab;
  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #9877ff;
    line-height: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const MobileLetras = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 49%;
    transform: translateX(-50%);
    border: 0;
    bottom: 3rem;
  }
`
