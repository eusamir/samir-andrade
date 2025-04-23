'use client'
import { motion } from 'framer-motion'
import InfinityScrolling from '../InfinityScrolling/InfinityScrolling'
import * as S from './HeroSection.styled'

const name = 'Samir Andrade'

export function HeroSection() {
  return (
    <S.Container id="hero">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: 'easeOut' }}
      >
        <S.InfoSamirContainer>
          <S.TextPresentation>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Olá, eu sou
            </motion.h2>

            <S.NameBox>
              <S.Nome>
                {name.split('').map((letra, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  >
                    {letra}
                  </motion.span>
                ))}
              </S.Nome>
            </S.NameBox>

            <S.LevelTag>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Full Stack developer
              </motion.h2>
            </S.LevelTag>
          </S.TextPresentation>

          <S.LetrasWrapper>
            {[...Array(20)].map((_, linhaIndex) => (
              <S.LinhaAnimada key={linhaIndex}>
                {[...Array(60)].map((_, letraIndex) => (
                  <img key={letraIndex} src="/mobileLetras.svg" alt="" />
                ))}
              </S.LinhaAnimada>
            ))}
          </S.LetrasWrapper>
        </S.InfoSamirContainer>
      </motion.div>
      <InfinityScrolling />
      <S.SamirImg src="/samiii.svg" alt="imagem samir" />

      <S.Ellipse src="/fundoHero.svg" alt="" />
    </S.Container>
  )
}
