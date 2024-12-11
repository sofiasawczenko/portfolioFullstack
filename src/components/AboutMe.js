import { useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

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
        <AboutMeContainer className="about-me">
            <PictureContainer>
                <PictureWrapper>
                    <img
                        alt="foto"
                        src="/images/PictureSofia.svg"
                    />
                </PictureWrapper>
            </PictureContainer>
            <ContentContainer>
                <AboutMeIntro>Um pouco sobre mim</AboutMeIntro>
                <AboutMeTitle>Sobre</AboutMeTitle>
                <AboutMeText>
                    Meu interesse e primeiro contato com tecnologia começou em 2003, quando minha avó abriu uma Lan House. Eu tive a oportunidade de acompanhar a evolução da tecnologia de perto e definitivamente isso foi significativo para eu trilhar esse caminho.
                    <br />
                    <br /> Atualmente desenvolvo no Front-end com foco na construção de componentes reutilizáveis. Já atuei como suporte técnico, fazendo atendimento a usuários e resolução de erros de Integração API.
                    <br />
                    <br /> Sou uma pessoa bem analítica e detalhista, e o meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo para entregar valor e experiência aos usuários/clientes.
                </AboutMeText>
            </ContentContainer>
        </AboutMeContainer>
    );
};

const AboutMeContainer = styled.div`
    margin-top: -10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    min-height: 90vh; 

    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 5rem;
        max-width: 100%;
    }
`;

const PictureContainer = styled.div`
    background-color: #fbfafa;
    flex: 1 1 100px;
    max-width: 500px;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    border-image: linear-gradient(50deg, var(--color-secondary), #fbfafa);
    border-image-slice: 1;

    @media (max-width: 768px) {
        max-width: 400px;
        margin-bottom: 1rem;
    }
`;

const PictureWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
    filter: drop-shadow(0 0.5rem 1.6rem rgba(51, 51, 51, 0.25));

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 3px;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

const ContentContainer = styled.div`
    flex: 2 1 600px;
    max-width: 600px;
    margin-left: 8%;
    margin-bottom: 2%;

    @media (max-width: 768px) {
        margin-left: 0;
        text-align: center;
    }
`;

const AboutMeIntro = styled.div`
    color: var(--color-secondary);
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: var(--font-size-base);
    font-family: var(--font-family-base);

    @media (max-width: 768px) {
        font-size: var(--font-size-base);
        text-align: left;
        margin-bottom: 5px;
    }
`;

const AboutMeTitle = styled.div`
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: bold;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: left;
        margin-bottom: 5%;
    }
`;

const AboutMeText = styled.div`
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    color: var(--color-font);
    line-height: 1.6;
    text-align: justify;

    @media (max-width: 768px) {
        text-align: justify;
    }
`;
