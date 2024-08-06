'use client'
import * as S from './ProjectsSection.styled'
import { Card } from "../Card/Card";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const projects = [{
    img: 'teste',
    title: 'titulo',
    description: 'string',
    tecs: ['teste', 'teste'],
    url: 'teste'
},
{
  img: 'teste',
  title: 'titulo',
  description: 'string',
  tecs: ['teste', 'teste'],
  url: 'teste'
},
{
  img: 'teste',
  title: 'titulo',
  description: 'string',
  tecs: ['teste', 'teste'],
  url: 'teste'
},
{
  img: 'teste',
  title: 'titulo',
  description: 'string',
  tecs: ['teste', 'teste'],
  url: 'teste'
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
      <div>
        <S.Title>Projects</S.Title>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus</p>
      </div>
      <S.CarouselContainer ref={sliderRef}>
            {
              projects.map((infos)=>(
                <S.Slider className="keen-slider__slide" key={infos.title}>
                  <Card card={infos} key={infos.title}/>
                </S.Slider>
              ))
            }
      </S.CarouselContainer>
      <S.Button>Ver todos os projetos</S.Button>
    </S.Container>

  )
}
