"use client"
import styled from "styled-components";

interface LogoProps{
    $isVisible: boolean
}

export const LogoContainer = styled.div`
    
`
export const Logo = styled.img<LogoProps>`
    position: fixed;
    padding: 5rem;
    top: 0;
    left: 0;
    z-index: 9999;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
`;