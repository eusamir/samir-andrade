'use client'

import styled from 'styled-components'

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  @media (max-width: 768px) {
    scroll-snap-type: none;
    overflow-y: auto;
  }
`
