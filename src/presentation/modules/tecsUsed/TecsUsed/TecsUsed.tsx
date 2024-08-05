import { Navigation } from '../../home/Navigation/Navigation'
import Card from '../Card/Card'
import * as S from './TecsUsed.styled'


const imgs = [
    {
        img:'/css.png',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
        img:'/js.png',
        url:'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    }, 
    {
        img:'/java.png',
        url:'https://docs.oracle.com/en/java/'
    }, 
    {
        img:'/docker.png',
        url:'https://docs.docker.com'
    }, 
    {
        img:'/html.png',
        url:'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    }, 
    {
        img:'/typescript.png',
        url:'https://www.typescriptlang.org/docs/'
    }, 
    {
        img:'/gitlab.png',
        url:'https://docs.gitlab.com'
    }, 
    {
        img:'/react.png',
        url:'https://react.dev/learn'
    }, 
    {
        img:'/springer.png',
        url:'https://docs.spring.io/spring-boot/documentation.html'
    }, 
    {
        img:'/vscode.png',
        url:'https://code.visualstudio.com'
    }, 
    {
        img:'/next.png',
        url:'https://nextjs.org/docs'
    }, 
    {
        img:'/mysql.png',
        url:'https://dev.mysql.com/doc/'
    }]
export function TecsUsed(){
    return(
        <S.Container id="tecsUsed">
            <S.LeftSection>
                <S.TitleContainer>
                    <S.Title>Technologies I use</S.Title>
                    <S.Paragraph>
                        Here are some technologies I use on a day-to-day basis to build new applications.
                    </S.Paragraph>
                </S.TitleContainer>
                <Navigation sectionColor={'#FFD749'}/>
            </S.LeftSection>
            <S.RightSection>
                <br />
            </S.RightSection>
            <S.CardsContainer>
                {imgs.map((props) =>(
                    <Card img={props.img} url={props.url} key={props.img}/>
                ))}
            </S.CardsContainer>
        </S.Container>
    )
}