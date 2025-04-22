'use client'

import styled from 'styled-components'

interface CircleProps {
  isLast?: boolean
}
interface TimelineItemProps {
  side: 'left' | 'right'
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #14092c;
  justify-content: center;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
  z-index: 0;
  @media (max-width: 768px) {
    height: 130vh;
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
export const Letters = styled.img``
export const LettersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const Timeline = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`

export const TimelineItem = styled.div<TimelineItemProps>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${({ side }) =>
    side === 'left' ? 'flex-start' : 'flex-end'};

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`

export const TimelineContent = styled.div<TimelineItemProps>`
  background: transparent;
  border-radius: 8px;
  padding: 1rem 2rem;
  max-width: 500px;
  color: white;
  text-align: ${({ side }) => (side === 'left' ? 'right' : 'left')};
  overflow: hidden;

  h3 {
    font-size: 1.2rem;
    margin: 0;
  }

  span {
    font-size: 0.9rem;
    color: #a58df0;
  }

  p {
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`

export const Circle = styled.div<CircleProps>`
  width: ${({ isLast }) => (isLast ? '40px' : '25px')};
  height: ${({ isLast }) => (isLast ? '40px' : '25px')};
  border-radius: 50%;
  background: #a58df0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;

  @media (max-width: 768px) {
    left: 0;
    transform: translateX(-50%);
  }
`

export const Line = styled.div`
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
  height: 65%;
  width: 4px;
  background: #a58df0;
  z-index: -1;

  @media (max-width: 768px) {
    left: 0;
    transform: translateX(0);
    top: 21%;
    height: 70%;
  }
`
export const TimelineWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    height: 100%;
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
