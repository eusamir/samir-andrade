import { Navigation } from "../../home/Navigation/Navigation";
import * as S from "./ThroughoutTheYearsSection.styled"

export function ThroughoutTheYearsSection(){
    return(
        <S.Container id="throughoutYears">
            <S.LetterImage src="/sAmarelo.svg" alt="" />
            <S.ContentContainer>
                <S.TitleContainer>
                    <S.Title>Throughout the years,</S.Title>
                    <S.Paragraph>
                        With over 3 years of experience in software development, I have specialized in both front-end and back-end using technologies such as JavaScript, TypeScript, and Java. I have a proven track record in creating scalable and flexible applications, leading teams, and implementing test-driven architectures. My expertise encompasses building complex systems and ensuring high-quality, maintainable code.                    
                    </S.Paragraph>
                    <S.Paragraph>
                        Currently, I work as a FullStack Developer at Ceuma / OXYGENI, where I have progressed from a Junior to a Senior role. My responsibilities include building scalable applications with a Headless CMS, leading a squad for internal and external projects, and applying clean architecture principles. I have developed several white-label marketplaces, implemented Kubernetes, and created systems for various purposes, including OxyEdu, Oxyspaces, and Oxyplano. My earlier roles involved maintaining legacy Java systems, training junior developers and working with Docker.
                    </S.Paragraph>
                    <S.Paragraph>
                        In addition to my professional experience, I have been involved in teaching and mentoring. I have taught foundational front-end development technologies at INCODE and guided students in Java API development. I hold certifications in Clean Code, SQL databases, and Next.js, and I am fluent in both Portuguese and English. I am also graduating in Software Engineering at the University of Dom Bosco.
                    </S.Paragraph>
                </S.TitleContainer>
                <S.Image src="/samiAtWork.png" alt="" />
            </S.ContentContainer>
            <S.RightSection>
                <Navigation sectionColor={"#ffff"}/>
            </S.RightSection>
        </S.Container>
    )
}