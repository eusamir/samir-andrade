'use client'
import * as S from './ProjectsSection.styled'
import { Card } from '../Card/Card'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'

const projects = [
  {
    img: '/ruralTrack.svg',
    title: 'Rural Track',
    description:
      'Aplicativo voltado para o desenvolvimento e gerenciamento do produtor rural.',
    url: 'https://play.google.com/store/apps/details?id=com.ruraltrack.app',
  },
  {
    img: '/oxyspaces.svg',
    title: 'Oxyspaces',
    description:
      'Plataforma de marketplace para locação de espaços físicos e salas de reunião.',
    url: 'https://oxyspaces.oxygeni.com.br/',
  },
  {
    img: '/oxy.png',
    title: 'Oxygeni',
    description:
      'Site institucional da Oxygeni, empresa focada em soluções tecnológicas para o setor educacional.',
    url: 'https://oxygeni.com.br/',
  },
  {
    img: '/ceuma.svg',
    title: 'MarketPlace Ceuma',
    description:
      'Plataforma para busca e comparação de cursos de graduação e pós-graduação da Universidade Ceuma.',
    url: 'https://ceuma.grupoceuma.com.br',
  },
  {
    img: '/oxyplano.png',
    title: 'Oxyplano',
    description:
      'Gerenciador de conteúdos e planejamentos pedagógicos voltado para professores e coordenadores acadêmicos.',
    url: 'https://eplano.grupoceuma.com.br/signin',
  },
  {
    img: '/oxyedu.jpg',
    title: 'OxyEdu',
    description:
      'Marketplace educacional para instituições de ensino com foco na gestão e oferta de cursos.',
    url: '#',
  },
  {
    img: '/petshop.png',
    title: 'Vet-Shop',
    description:
      'Aplicação completa para gestão de petshops, com API RESTful e sistema de agendamento de serviços veterinários.',
    url: 'https://github.com/eusamir/vet-shop',
  },
]

export function ProjectsSection() {
  const [sliderRef, slider] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: -70,
    },
    breakpoints: {
      '(max-width: 1300px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 0,
        },
      },
    },
  })

  const goPrev = () => slider.current?.prev()
  const goNext = () => slider.current?.next()

  return (
    <S.Container id="projectSection">
      <S.HeaderContainer>
        <S.Title>Projetos</S.Title>
        <S.Description>
          Aqui estão os projetos mais importantes que fiz parte.
        </S.Description>
      </S.HeaderContainer>
      <S.Content>
        <S.NavButton className="left" onClick={goPrev}>
          <CaretLeft weight="bold" />
        </S.NavButton>

        <S.CarouselContainer ref={sliderRef}>
          {projects.map((infos) => (
            <S.Slider className="keen-slider__slide" key={infos.title}>
              <Card card={infos} />
            </S.Slider>
          ))}
        </S.CarouselContainer>

        <S.NavButton className="right" onClick={goNext}>
          <CaretRight weight="bold" />
        </S.NavButton>
      </S.Content>
      <a href="https://github.com/eusamir?tab=repositories">
        <S.Button>Olhar todos os projetos</S.Button>
      </a>
    </S.Container>
  )
}
