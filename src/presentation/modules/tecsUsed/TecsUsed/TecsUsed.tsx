import * as S from './TecsUsed.styled'

const imgs = [
  {
    img: '/css.svg',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    nome: 'Css',
  },
  {
    img: '/js.svg',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    nome: 'JavaScript',
  },
  {
    img: '/java.svg',
    url: 'https://docs.oracle.com/en/java/',
    nome: 'Java',
  },
  {
    img: '/docker.svg',
    url: 'https://docs.docker.com',
    nome: 'Docker',
  },
  {
    img: '/html.svg',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    nome: 'Html',
  },
  {
    img: '/ts.svg',
    url: 'https://www.typescriptlang.org/docs/',
    nome: 'Typescript',
  },
  {
    img: '/git.svg',
    url: 'https://docs.gitlab.com',
    nome: 'Git',
  },
  {
    img: '/react.svg',
    url: 'https://react.dev/learn',
    nome: 'React',
  },
  {
    img: '/spring.svg',
    url: 'https://docs.spring.io/spring-boot/documentation.html',
    nome: 'Spring Boot',
  },
  {
    img: '/jest.svg',
    url: 'https://code.visualstudio.com',
    nome: 'Jest',
  },
  {
    img: '/nextjs.svg',
    url: 'https://nextjs.org/docs',
    nome: 'Next',
  },
  {
    img: '/mysql.svg',
    url: 'https://dev.mysql.com/doc/',
    nome: 'Mysql',
  },
  {
    img: '/angular.svg',
    url: 'https://dev.mysql.com/doc/',
    nome: 'Angular',
  },
  {
    img: '/node.svg',
    url: 'https://dev.mysql.com/doc/',
    nome: 'Node',
  },
  {
    img: '/tailwind.svg',
    url: 'https://dev.mysql.com/doc/',
    nome: 'Tailwind',
  },
]
export function TecsUsed() {
  return (
    <S.Container id="tecsUsed">
      <S.TitleContainer>
        <S.Title>Hard Skills</S.Title>
      </S.TitleContainer>
      <S.CardsContainer>
        {imgs.map((e) => (
          <S.LogoWrapper href={e.url}>
            <S.ImageLogo src={e.img} width={65} height={65} alt="" />
            <S.LogoText>{e.nome}</S.LogoText>
          </S.LogoWrapper>
        ))}
      </S.CardsContainer>
      <S.Ellipse src="/fundoTecs.svg" alt="" />
    </S.Container>
  )
}
