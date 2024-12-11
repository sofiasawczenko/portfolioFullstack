import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";

export const Experiences = () => {
    useEffect(() => {
        ScrollReveal().reveal('.experiences', {
            distance: '50px',
            duration: 2000,
            easing: 'ease-out',
            origin: 'top',
            opacity: 0,
        });
    }, []);

    const [activeTab, setActiveTab] = useState("Johnson");

    const experiences = {
        Johnson: {
            title: "Johnson & Johnson",
            period: "Setembro 2024 - Presente",
            description: [
                "A Johnson & Johnson é líder global em saúde, operando no setor farmacêutico como Janssen, com medicamentos inovadores em áreas como oncologia e imunologia, e dispositivos médicos, oferecendo soluções avançadas para cirurgia, ortopedia e cardiologia. A empresa combina tecnologia e inovação para transformar vidas.",
                "• Desenvolvimento Front-End de projetos de larga escala.",
                "• Correção de bugs em TypeScript, JavaScript, React e Java.",
                "• Desenvolvimento de autenticação para usuários internos com PHP, F5 e JavaScript.",
                "• Manutenção de software legado.",
                "Resultados:",
                "• Experiência com a refatoração do processo de autenticação da maior plataforma da empresa com PHP, Javascript e OAuth2, garantindo segurança para 100 mil usuários e reduzindo significativamente o tempo de login durante picos de acesso.",
                "• Prática com correção de bugs em TypeScript, JavaScript, React e Java em solução que impactou 20 mil usuários internos, permitindo a reserva de estações de trabalho via aplicativo, otimizando a gestão de espaços corporativos e aumentando a eficiência organizacional pós-pandemia.",
            ],
        },
        embraer: {
            title: "Embraer",
            period: "Janeiro 2023 - Setembro 2024",
            description: [
                "A Embraer é uma fabricante brasileira de aeronaves executivas, comerciais e militares, sendo a terceira maior do mundo e referência internacional em desenvolvimento de produto, qualidade e segurança.",
                "Responsabilidades:",
                "• Desenvolvimento Front-End de projetos de larga escala.",
                "• Correção de bugs em TypeScript, JavaScript, React e Java.",
                "• Desenvolvimento de autenticação para usuários internos com PHP, F5 e JavaScript.",
                "• Manutenção de software legado.",
                "Resultados:",
                "• Experiência com a refatoração do processo de autenticação da maior plataforma da empresa com PHP, Javascript e OAuth2, garantindo segurança para 100 mil usuários e reduzindo significativamente o tempo de login durante picos de acesso.",
                "• Prática com correção de bugs em TypeScript, JavaScript, React e Java em solução que impactou 20 mil usuários internos, permitindo a reserva de estações de trabalho via aplicativo, otimizando a gestão de espaços corporativos e aumentando a eficiência organizacional pós-pandemia.",
            ],
        },
        anymarket: {
            title: "Anymarket",
            period: "Janeiro 2021 - Fevereiro 2022",
            description: [
                "A DB1 é um grupo de empresas de tecnologia reconhecido no varejo. No Anymarket, onde tive a oportunidade de trabalhar, a empresa atua como um hub de integração entre o ERP dos vendedores e diversos marketplaces, facilitando a atualização de todo o catálogo de produtos em um único lugar. Minha função foi oferecer suporte nas integrações API/ERP.",
                "Responsabilidades:",
                "• Suporte e atendimento a usuários por meio de tickets, chat e ramais.",
                "• Identificação e correção de falhas de integração por meio da análise de logs no Kibana, Postman API, Swagger e no banco de dados Oracle.",
                "• Plantão em períodos de pico, como a Black Friday.",
                "Resultados:",
                "• Prática em corrigir falhas críticas de envio de dados, garantindo uma integração 100% funcional durante grandes eventos, como a Black Friday, em plataformas como a Amazon.",
                "• Experiência na criação de templates de filtros avançados no Kibana e na elaboração de queries básicas no Oracle SQL para toda a equipe, reduzindo significativamente o tempo de identificação de problemas operacionais nos dados e logs, e diminuindo o SLA.",
            ],
        },
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <ExperiencesContainer className="experiences">
            <ExperiencesContent>
                <ExperiencesIntro>Minhas Experiências</ExperiencesIntro>
                <ExperiencesTitle>Lugares onde trabalhei</ExperiencesTitle>
                <MenuContainer>
                    <VerticalMenu>
                        {Object.keys(experiences).map((key) => (
                            <MenuItem
                                key={key}
                                active={activeTab === key}
                                onClick={() => handleTabClick(key)}
                            >
                                {experiences[key].title}
                            </MenuItem>
                        ))}
                    </VerticalMenu>
                    <ExperiencesText>
                        <ExperiencesTextTitle>
                            {experiences[activeTab].title}
                        </ExperiencesTextTitle>
                        <Period>{experiences[activeTab].period}</Period>
                        <ExperienceDescription>
                            {experiences[activeTab].description.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </ExperienceDescription>
                    </ExperiencesText>
                </MenuContainer>
            </ExperiencesContent>
        </ExperiencesContainer>
    );
};

const ExperiencesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    background-color: var(--color-background--light);
    margin: 0 auto; 
    max-width: 80%; 
    min-height: 70vh; 

    @media (max-width: 768px) {
        max-width: 100%; 
    }
`;

const ExperiencesContent = styled.div`
    width: 100%;
    max-width: 80%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 425px) {
        margin-left: 5%;
        max-width: 90%;
    }
`;

const ExperiencesIntro = styled.h2`
    font-size: var(--font-size-base);
    color: var(--color-secondary);
    font-weight: bold;
    margin-bottom: -0.5rem;
`;

const ExperiencesTitle = styled.h3`
    font-size: var(--font-size-title);
    color: var(--color-font--dark);
    margin-top: 1rem;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const VerticalMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MenuItem = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--color-secondary);
    border: none;
    width: 15rem;
    padding: 1rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    text-align: left;
    position: relative;
    transition: background-color 0.3s ease;

    @media (max-width: 425px) {
        width: 80%;
    }

    &:hover {
        background-color: var(--color-secondary--light);
    }

    ${(props) =>
        props.active &&
        `background-color: var(--color-secondary--light);
        &::before {
            background-color: #c8023f;
        }
    `}

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: ${props => 
            props.active ? '#c8023f' : '#dfdfdf'};
        transition: background-color 0.3s ease;
    }

    &:hover::before {
        background-color: #c8023f;
    }
`;

const ExperiencesText = styled.div`
    text-align: justify;
    margin-top: -1rem;

    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

const ExperiencesTextTitle = styled.h4`
    font-size: var(--font-size-body);
    color: var(--color-font--dark);
    margin-bottom: 0.5rem;
`;

const Period = styled.small`
    display: block;
    color: #888;
    margin-bottom: 1rem;
`;

const ExperienceDescription = styled.div`
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    color: var(--color-font);
    line-height: 1.6;
    text-align: justify;

    p {
        margin-bottom: 1rem;
    }
`;
