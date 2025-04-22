'use client'
import styled from 'styled-components'

interface LogoProps {
  $isVisible: boolean
  $isMobile?: boolean
}

export const LogoContainer = styled.div``
export const Logo = styled.img<LogoProps>`
  position: fixed;
  padding: 5rem;
  top: 0;
  left: 0;
  z-index: 9999;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  ${({ $isMobile }) =>
    $isMobile
      ? `
      display: none;
      @media (max-width: 768px) {
        display: block;
        padding: 3.5rem 2rem;
      }
    `
      : `
      @media (max-width: 768px) {
        display: none;
      }
    `}
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
