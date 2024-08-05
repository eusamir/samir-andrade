import * as HomeSection from "../presentation/modules/home"
import * as AboutMeSection from "../presentation/modules/aboutMe"
import * as S from './styled'
import * as ThroughoutTheYearsSection from "@/presentation/modules/throughoutTheYears";
import * as TecsUsed from '@/presentation/modules/tecsUsed'
import * as ProjectsSection from '@/presentation/modules/projetcs'
export default function Home() {

  return (
    <S.Container className="scroll-container">
      <HomeSection.HeroSection/>
      <AboutMeSection.AboutMeSection/>
      <ThroughoutTheYearsSection.ThroughoutTheYearsSection/>
      <TecsUsed.TecsUsed/>
      <ProjectsSection.ProjectsSection/>
    </S.Container>
  )
}
