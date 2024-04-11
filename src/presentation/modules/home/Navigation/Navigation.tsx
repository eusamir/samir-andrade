'use client'

import { useState } from 'react'
import * as S from './Navigation.styled'

export function Navigation(){
    const [activeNavigation, setActiveNavigation] = useState(0)

    const handleSetActive = (index) => {
        setActiveNavigation(index);
      };

    return(
        <S.NavigationOptionContainer>
            <S.NavigationOption $test={activeNavigation === 0} onClick={() => handleSetActive(0)}>
                <a href="#section1"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 1} onClick={() => handleSetActive(1)}>
                <a href="#section2"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 2} onClick={() => handleSetActive(2)}>
                <a href="#section3"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 3} onClick={() => handleSetActive(3)}>
                <a href="#section4"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 4} onClick={() => handleSetActive(4)}>
                <a href="#section5"></a>
            </S.NavigationOption>
        </S.NavigationOptionContainer>
    )
}
