'use client'
import * as S from './ProjectsSection.styled'
import { Card } from "../Card/Card";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const projects = [{
    img: '/oxyspaces.svg',
    title: 'Oxyspaces',
    description: 'Marketplace for renting spaces',
    tecs: ['/next.png', '/styled.svg', '/java.png', '/typescript.png'],
    url: 'https://oxyspaces.oxygeni.com.br/'
},
{
  img: '/oxy.png',
  title: 'Oxygeni',
  description: 'Website for Oxygeni',
  tecs: ['/next.png', '/styled.svg', '/typescript.png'],
  url: 'https://oxygeni.com.br/'
},
{
  img: '/ceuma.svg',
  title: 'MarketPlace Ceuma',
  description: 'Marketplace for searching courses',
  tecs: ['/next.png', '/strapi.png', '/styled.svg', '/typescript.png'],
  url: 'https://ceuma.grupoceuma.com.br'
},
{
  img: '/oxyplano.png',
  title: 'Oxyplano',
  description: 'Content manager for teachers',
  tecs: ['/next.png', '/mysql.png', '/java.png', '/typescript.png'],
  url: 'https://eplano.grupoceuma.com.br/signin'
},
{
  img: '/oxyedu.jpg',
  title: 'OxyEdu',
  description: 'A institution marktplace',
  tecs: ['/next.png', '/strapi.png','/typescript.png'],
  url: '#'
},
{
  img: '/petshop.png',
  title: 'Vet-Shop',
  description: 'A vetshop with a RESTful API',
  tecs: ['/java.png', '/springer.png'],
  url: 'https://github.com/eusamir/vet-shop'
}]

export function ProjectsSection(){
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 20
    }
  });

  return(
    <S.Container id='projectSection'>
      <S.HeaderContainer>
        <S.Title>Projects</S.Title>
        <S.Description>Here are some of the most important projects that i created</S.Description>
      </S.HeaderContainer>
      <S.CarouselContainer ref={sliderRef}>
            {
              projects.map((infos)=>(
                <S.Slider className="keen-slider__slide" key={infos.title}>
                  <Card card={infos} key={infos.title}/>
                </S.Slider>
              ))
            }
      </S.CarouselContainer>
      <a href="https://github.com/eusamir?tab=repositories">
        <S.Button>
          See all projects
        </S.Button>
      </a>
    </S.Container>

  )
}
