'use client'

import styled from "styled-components";

interface NavigationProps{
    $test: boolean
}

export const NavigationOption = styled.li<NavigationProps>`
    width: ${ props => props.$test ? '30px' : '20px'};;
    height: ${ props => props.$test ? '30px' : '20px'};;
    border-radius: 50%;
    background-color: ${ props => props.$test ? '#160054' : 'white'};
    margin-top: 0.5rem;
    border: 3px solid white;
    list-style: none;
    transition: ease-in-out 0.5s;
    cursor: pointer;
`

export const NavigationOptionContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5rem;
`
