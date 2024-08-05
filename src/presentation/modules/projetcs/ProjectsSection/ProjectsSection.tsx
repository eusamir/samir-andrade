'use client'
import * as S from './ProjectsSection.styled'
import { Card } from "../Card/Card";

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
  return(
    <S.Container id='projectSection'>
      <div>
        <S.Title>Projects</S.Title>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting indus</p>
      </div>
      <S.CarouselContainer>
            {
              projects.map((infos)=>(
                  <Card card={infos} key={infos.title}/>
              ))
            }
      </S.CarouselContainer>
      <S.Button>Ver todos os projetos</S.Button>
    </S.Container>

  )
}
