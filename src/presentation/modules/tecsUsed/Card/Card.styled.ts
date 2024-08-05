'use client'
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 10px;
    padding: 2rem;
    width: 170px;
    cursor: pointer;
    &:hover{
        filter: brightness(0.8);
    }
    a{
        text-decoration: none;
    }
`