'use client'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;  // Impede o scroll horizontal
    width: 100%;
    height: 100%;
  }

  body {
    overflow-y: auto;  // Permite o scroll vertical
  }
`;
