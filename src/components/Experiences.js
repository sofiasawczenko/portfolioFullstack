import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

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
        <section className="experiences py-5">
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-12 text-left">
                        <h2 style={{ color: 'var(--bs-primary)' }} className="fw-bold">Minhas Experiências</h2>
                        <h3 style={{ color: 'var(--bs-dark)' }} className="fw-bold">Lugares onde trabalhei</h3>
                        <h2 className="text-muted">Um pouquinho da minha trajetória profissional.</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-5">
                        <VerticalMenu>
                            {Object.keys(experiences).map((key) => (
                                <MenuItem
                                    key={key}
                                    active={activeTab === key}
                                    onClick={() => handleTabClick(key)}
                                    className="list-group-item list-group-item-action"
                                >
                                    {experiences[key].title}
                                </MenuItem>
                            ))}
                        </VerticalMenu>
                    </div>

                    <div className="col-md-8">
                        <div>
                            <h4>{experiences[activeTab].title}</h4>
                            <small className="text-muted">{experiences[activeTab].period}</small>
                            <div className="mt-3" style={{ color: 'var(--bs-secondary-color)', textAlign: 'justify' }}>
                                {experiences[activeTab].description.map((desc, index) => (
                                    <p key={index}>{desc}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VerticalMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

const MenuItem = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--bs-primary);
    border: none;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    text-align: left;
    position: relative;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #FBDBDB; 
        color: var(--bs-primary);
    }

    ${(props) =>
        props.active &&
        `background-color: #FBDBDB;
        color: var(--bs-primary); /* Cor do texto quando ativo */
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
