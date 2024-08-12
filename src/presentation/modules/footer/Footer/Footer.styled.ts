'use client'
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    height: 20vh;
    justify-content: space-between;
    background-color: #160054;
    position: relative;
    overflow: hidden;
    scroll-snap-align: start;
    z-index: 0;
    align-items: center;
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bolder;
  color: white;
`
export const Social = styled.p`
  color: white;
  font-weight: 500;
`
export const LeftSection = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const RightSection = styled.div`
  display: flex;
  margin-right: 5rem;
  gap: 0.5rem;
  P{
    color: white;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div{
    display: flex;
    align-items: centerS;
    gap: 0.5rem;
  }
`
