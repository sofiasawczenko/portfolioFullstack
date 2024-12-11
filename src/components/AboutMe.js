import { useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from "scrollreveal";

export const AboutMe = () => {
    useEffect(() => {
        ScrollReveal().reveal('.about-me', {
            distance: '50px',
            duration: 2000,
            easing: 'ease-out',
            origin: 'top',
            opacity: 0,
        });
    }, []);

    return (
        <AboutMeComponent className="about-me">
            <AboutMePictureMargin>
                <AboutMePicture>
                    <img alt="foto" src="https://media.licdn.com/dms/image/v2/D4D03AQFuGlNYSBA1lA/profile-displayphoto-shrink_800_800/B4DZOY40OWHoAg-/0/1733436853678?e=1738800000&v=beta&t=dHBFwFwu_qluRjmL1ACCB9528kMMk5kBA751hh3eQHM"></img>
                </AboutMePicture>
            </AboutMePictureMargin>
            <AboutMeContent>
                <AboutMeIntro>
                    Um pouco sobre mim
                </AboutMeIntro>
                <AboutMeTitle>
                    Sobre
                </AboutMeTitle>
                <AboutMeText>
                    Meu primeiro contato com tecnologia aconteceu em 2003, quando minha avó abriu uma Lan House. Essa experiência me permitiu acompanhar a evolução dos videogames e computadores, sendo significativo para que eu seguisse o caminho da tecnologia.
                    <br></br><br></br>Atualmente desenvolvo no Front-end com foco na construção de componentes reutilizáveis ​​e otimização de desempenho. Tendo um histórico de experiência bem amplo, tendo atuado como suporte técnico e analista de requisitos.
                    <br></br><br></br>Meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo, para o desenvolvimento e eficiência de novos sistemas e na melhoria de existentes para uma melhor experiência do usuário.
                </AboutMeText>
            </AboutMeContent>
        </AboutMeComponent>
    );
};

const AboutMeComponent = styled.div`
    margin-top: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;


const AboutMePictureMargin = styled.div`
    background-color: #fbfafa;
    flex: 1 1 500px;
    max-width: 400px;
    border-left: 6px solid var(--color-secondary);
    border-top: 6px solid var(--color-secondary);
    border-right: none;
    border-bottom: none;
`;

const AboutMePicture = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80%;
    margin-top: 2rem;
    margin-left: 2rem;
    filter: drop-shadow(0 1.6rem 1.6rem rgba(51, 51, 51, 0.25));
    
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 3px;
    }
`;

const AboutMeContent = styled.div`
    flex: 2 1 600px;
    max-width: 600px;
    margin-top: 1%;
    margin-left: 10%;
`;

const AboutMeIntro = styled.div`
    color: var(--color-secondary);
    font-weight: bold;
    margin-bottom: 1rem;
`;

const AboutMeTitle = styled.div`
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: bold;
`;

const AboutMeText = styled.div`
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    color: var(--color-font);
    line-height: 1.6;
    text-align: justify;
`;
