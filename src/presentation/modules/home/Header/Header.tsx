"use client"

import { useEffect, useState } from "react";
import { Burguer } from "../Burguer/Burguer";
import * as S from "./Header.styled"
export function Header(){
    const [currentSectionId, setCurrentSectionId] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
        root: null,
        threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setCurrentSectionId(entry.target.id);
            }
        });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return(
        <>
        <S.LogoContainer>
                <S.Logo src="/logo.png" alt="logo" isVisible={currentSectionId === "hero"} />
                <S.Logo src="/logo2.png" alt="logo" isVisible={currentSectionId !== "hero"} />
            </S.LogoContainer>
        <Burguer currentSection={currentSectionId}/>
        </>
    )
}