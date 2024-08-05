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
    flex-direction: column;
    gap: 1rem;
    margin-left: 5rem;
    margin-top: 15rem;
`
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: absolute;
    gap: 2rem;
    right: 0;
    margin-right: 12rem;
    margin-top: 12rem;
`