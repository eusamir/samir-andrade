import * as HomeSection from "../presentation/modules/home"
import * as S from './styled'
export default function Home() {
  return (
    <S.Container>
      <HomeSection.HeroSection />
      <HomeSection.HeroSection />
    </S.Container>
  );
}
