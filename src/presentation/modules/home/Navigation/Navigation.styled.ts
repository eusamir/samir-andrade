'use client'

import styled from "styled-components";

interface NavigationProps{
    active: boolean
}

export const NavigationOption = styled.li<NavigationProps>`
    width: ${({ active }) => (active ? '30px' : '20px')};;
    height: ${({ active }) => (active ? '30px' : '20px')};;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#160054' : 'white')};
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