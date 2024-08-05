import * as HomeSection from "../presentation/modules/home"
import * as AboutMeSection from "../presentation/modules/aboutMe"
import * as S from './styled'
import * as ThroughoutTheYearsSection from "@/presentation/modules/throughoutTheYears";
import * as TecsUsed from '@/presentation/modules/tecsUsed'
export default function Home() {
  
  return (
    <S.Container className="scroll-container">
      <HomeSection.HeroSection/>
      <AboutMeSection.AboutMeSection/>
      <ThroughoutTheYearsSection.ThroughoutTheYearsSection/>
      <TecsUsed.TecsUsed/>
    </S.Container>
  )
}
