'use client'
import * as S from './AboutSection.styled'

type Experience = {
  title: string
  period: string
  description: string
  side: 'left' | 'right'
  isLast?: boolean
}

const experiences: Experience[] = [
  {
    title: 'Jovem Aprendiz',
    period: '2021 - 2021',
    description:
      'Iniciei no grupo Ceuma criando websites e APIs com HTML, CSS e JavaScript, focando em soluções simples e funcionais.',
    side: 'right',
  },
  {
    title: 'Desenvolvedor Júnior',
    period: '2021 - 2022',
    description:
      'Atuei na manutenção de portais em Angular e na fragmentação da E-Bridge em microsserviços, integrando o AVA ao RM com APIs REST.',
    side: 'left',
  },
  {
    title: 'Desenvolvedor Pleno',
    period: '2022 - 2023',
    description:
      'Desenvolvi landing pages com Angular e React, o MarketPlace do Grupo Ceuma e APIs com Node.js e mantive sistemas Java legados. Usei Docker, GitLab CI e ajudei na formação de novos devs.',
    side: 'right',
  },
  {
    title: 'Desenvolvedor Sênior',
    period: '2023 - 2025',
    description:
      'Liderei o time que entregou os marketplace Oxyspaces, o site da Oxygeni e a plataforma Oxyplano, usando React, Strapi, Java e Spring Boot, com foco em arquitetura limpa, testes e Kubernetes.',
    side: 'left',
  },
  {
    title: 'Analista de Sistemas',
    period: '2025 - hoje',
    description:
      'Atuo no planejamento técnico, arquitetura de sistemas e validação de soluções com foco em escalabilidade e usabilidade.',
    side: 'right',
    isLast: true,
  },
]

export function AboutMeSection() {
  return (
    <S.Container id="aboutMe">
      <S.LettersContainer>
        <S.Letters src="/backgroundLetter.svg" alt="" />
        <S.Letters src="/backgroundLetter.svg" alt="" />
      </S.LettersContainer>
      <S.TimelineWrapper>
        <S.Timeline>
          <S.Title>Minha experiência</S.Title>
          {experiences.map((exp, index) => (
            <S.TimelineItem
              key={index}
              side={exp.side}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <S.TimelineContent side={exp.side}>
                <h3>{exp.title}</h3>
                <span>{exp.period}</span>
                <p>{exp.description}</p>
              </S.TimelineContent>
              <S.Circle isLast={exp.isLast} />
            </S.TimelineItem>
          ))}

          <S.Line />
        </S.Timeline>
      </S.TimelineWrapper>

      <S.Ellipse src="/fundoExperiencia.svg" alt="" />
    </S.Container>
  )
}
