'use client'

import { useEffect, useState } from 'react'
import * as S from './Navigation.styled'

interface NavigationProps {
  sectionColor: string
}

export function Navigation({sectionColor}: NavigationProps) {
  const [activeNavigation, setActiveNavigation] = useState<string>("");
  const sectionIds = ['hero', 'aboutMe', 'throughoutYears', 'tecsUsed'];

  const handleSetActive = (id: string) => {
    setActiveNavigation(id);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavigation(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <S.NavigationOptionContainer>
      {sectionIds.map((id) => (
        <S.NavigationOption
          key={id}
          $test={activeNavigation === id}
          $sectionColor={sectionColor}
          onClick={() => handleSetActive(id)}
        >
        </S.NavigationOption>
      ))}
    </S.NavigationOptionContainer>
  );
}
