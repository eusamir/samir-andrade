import * as HomeSection from "../presentation/modules/home"
import * as AboutMeSection from "../presentation/modules/aboutMe"
import * as S from './styled'
export default function Home() {

  return (
    <S.Container className="scroll-container">
      <HomeSection.HeroSection/>
      <AboutMeSection.AboutMeSection/>
      <AboutMeSection.AboutMeSection/>
    </S.Container>
  );
}
