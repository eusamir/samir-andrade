'use client'

import { useState } from 'react'
import * as S from './Navigation.styled'

interface NavigationProps{
  sectionColor: string
}

export function Navigation({sectionColor}: NavigationProps){
    const [activeNavigation, setActiveNavigation] = useState(0)

    const handleSetActive = (index) => {
        setActiveNavigation(index);
      };

    return(
        <S.NavigationOptionContainer>
            <S.NavigationOption $test={activeNavigation === 0} $sectionColor={sectionColor} onClick={() => handleSetActive(0)}>
                <a href="#section1"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 1} $sectionColor={sectionColor} onClick={() => handleSetActive(1)}>
                <a href="#section2"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 2} $sectionColor={sectionColor} onClick={() => handleSetActive(2)}>
                <a href="#section3"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 3} $sectionColor={sectionColor} onClick={() => handleSetActive(3)}>
                <a href="#section4"></a>
            </S.NavigationOption>
            <S.NavigationOption $test={activeNavigation === 4} $sectionColor={sectionColor} onClick={() => handleSetActive(4)}>
                <a href="#section5"></a>
            </S.NavigationOption>
        </S.NavigationOptionContainer>
    )
}
