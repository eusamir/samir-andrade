import { Navigation } from '../../home/Navigation/Navigation'
import {MapPin } from 'lucide-react'
import * as S from './AboutSection.styled'
export function AboutMeSection(){
  return(
    <S.Container id='aboutMe'>
      <S.AboutMeContainer>
        <S.Title>About me</S.Title>
        <S.Paragraph>
            I started programming at the age of 17 and developed a passion for the profession. Initially, I learned Python and the fundamentals of programming through a course that I am now part of the organization. Over time, I gained skills in HTML, CSS, and JavaScript, which allowed me to land my first job working with ReactJS in creating software, landing pages, and systems. <br /> I also improved technically, acquiring skills in various technologies such as Next.js, React.js, React Native, Angular, TypeScript, Docker, Kubernetes, CI/CD, Strapi (CMS), Java, and Node.js. Additionally, I gained experience with freelancing, which contributed to my professional growth and understanding of the market.
        </S.Paragraph>
        <S.Location>
          <MapPin/>São Luís - MA
        </S.Location>
        <S.Image src='/initialBlue.svg' width={300}/>
      </S.AboutMeContainer>
        <Navigation sectionColor='#FFD749'/>
    </S.Container>
  )
}
