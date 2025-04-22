import * as HomeSection from "../presentation/modules/home"
import * as AboutMeSection from "../presentation/modules/aboutMe"
import * as S from './styled'
import * as TecsUsed from '@/presentation/modules/tecsUsed'
import * as ProjectsSection from '@/presentation/modules/projetcs'
import * as ContactMeSection from '@/presentation/modules/contactMe'
import * as Footer from '@/presentation/modules/footer'
import { Header } from "@/presentation/modules/home/Header/Header"
export default function Home() {

  return (
    <S.Container className="scroll-container">
      <HomeSection.HeroSection/>
      <AboutMeSection.AboutMeSection/>
      <TecsUsed.TecsUsed/>
      <ProjectsSection.ProjectsSection/>
      <ContactMeSection.ContactMe/>
      <Footer.Footer/>
      <Header />
    </S.Container>
  )
}
