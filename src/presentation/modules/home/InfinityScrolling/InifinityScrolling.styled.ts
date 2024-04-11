'use client'
import {css, keyframes, styled} from 'styled-components'
interface FluidLettersProps {
  $index: number;
}
const moveDown2 = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(4200%);
  }
`;

export const FluidLetters = styled.img<FluidLettersProps>`
    position: absolute;
    z-index: 0;
    left: 62%;
    top: 0;
    animation: ${moveDown2} 100s linear infinite;
    ${({ $index }) => css`
        margin-top: calc(${$index} * -19rem - 19rem);
    `}
  `
