'use client'

import styled from "styled-components";

interface NavigationProps{
    $test: boolean
    $sectionColor?: string
}

export const NavigationOption = styled.li<NavigationProps>`
    width: ${ props => props.$test ? '30px' : '20px'};;
    height: ${ props => props.$test ? '30px' : '20px'};;
    border-radius: 50%;
    background-color:'white';
    margin-top: 0.5rem;
    border: 7px solid ${ props => `${props.$sectionColor}`};
    list-style: none;
    transition: ease-in-out 0.5s;
    cursor: pointer;
    z-index: 999;
`

export const NavigationOptionContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 5rem;
    gap: 5px;
    bottom: 0;
    width: 10%;

`
