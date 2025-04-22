'use client'
import styled from "styled-components";
import Image from 'next/image'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #0F0F19;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    z-index: 0;
`
export const LeftSection = styled.div`

`
export const RightSection = styled.div`
    position: absolute;
    right: 0;
    width: 20%;
    height: 100vh;
    background-color: #160054;
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const Paragraph = styled.p`
    color: white;
    font-weight: 500;
    inline-size: 700px;
    text-align: justify;
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;
    gap: 1rem;
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999999999999;
  @media (max-width: 768px) {
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Ellipse = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1;
`
export const ImageLogo = styled(Image)`
  width: 65px;
  height: auto;
  @media (max-width: 768px) {
    width: 60px;
  }
`
export const LogoWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:hover img {
    filter: brightness(1.1) drop-shadow(0 0 10px #9877FF);
  }
`;
export const LogoText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #FFF;
  font-weight: bold;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`