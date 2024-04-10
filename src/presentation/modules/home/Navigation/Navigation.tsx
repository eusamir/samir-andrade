'use client'

import { useState } from 'react'
import * as S from './Navigation.styled'

export function Navigation(){
    const [active, setActive] = useState(0)

    const handleSetActive = (index) => {
        setActive(index);
      };

    return(
        <S.NavigationOptionContainer>
            <S.NavigationOption active={active === 0} onClick={() => handleSetActive(0)}>
                <a href="#section1"></a>
            </S.NavigationOption>
            <S.NavigationOption active={active === 1} onClick={() => handleSetActive(1)}>
                <a href="#section2"></a>
            </S.NavigationOption>
            <S.NavigationOption active={active === 2} onClick={() => handleSetActive(2)}>
                <a href="#section3"></a>
            </S.NavigationOption>
            <S.NavigationOption active={active === 3} onClick={() => handleSetActive(3)}>
                <a href="#section4"></a>
            </S.NavigationOption>
            <S.NavigationOption active={active === 4} onClick={() => handleSetActive(4)}>
                <a href="#section5"></a>
            </S.NavigationOption>
        </S.NavigationOptionContainer>
    )
}

function useClient(): [any, any] {
    throw new Error('Function not implemented.')
}
