import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";

const technologies = [
    { name: "React.js", icon: "/images/checkblue.svg" },
    { name: "Styled Components", icon: "/images/checkblue.svg" },
    { name: "Javascript", icon: "/images/checkblue.svg" },
    { name: "Typescript", icon: "/images/checkblue.svg" },
    { name: "Tailwind CSS", icon: "/images/checkblue.svg" },
    { name: "Bootstrap", icon: "/images/checkblue.svg" },
    { name: "Next", icon: "/images/checkblue.svg" },
    { name: "Java 17", icon: "/images/checkblue.svg" },
    { name: "SQL", icon: "/images/checkblue.svg" },
    { name: "Python", icon: "/images/checkblue.svg" },
    { name: "R", icon: "/images/checkblue.svg" },
    { name: "Figma", icon: "/images/checkblue.svg" },
    { name: "Git", icon: "/images/checkblue.svg" },
    { name: "GitHub", icon: "/images/checkblue.svg" },
    { name: "Agile", icon: "/images/checkblue.svg" },
];

export const Technologies = () => {
    useEffect(() => {
        ScrollReveal().reveal(".Technologies", {
            distance: "50px",
            duration: 2000,
            easing: "ease-out",
            origin: "top",
            opacity: 0,
        });
    }, []);

    return (
        <TechnologiesContainer className="Technologies">
            <TechnologiesContent>
                <TechnologiesIntro>Minhas Tecnologias</TechnologiesIntro>
                <TechnologiesTitle>Linguagens e Tecnologias</TechnologiesTitle>
                <TechList>
                    {technologies.map((tech, index) => (
                        <TechCard key={index}>
                            <TechIcon src={tech.icon} alt={`${tech.name} icon`} />
                            <TechName>{tech.name}</TechName>
                        </TechCard>
                    ))}
                </TechList>
            </TechnologiesContent>
        </TechnologiesContainer>
    );
};

const TechnologiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    background-color: var(--color-background--light);
    padding: 3rem 0;
    width: 100%;
    min-height: 70vh; 
`;

const TechnologiesContent = styled.div`
    max-width: 80%;
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center; 

    @media (max-width: 425px) {
        padding: 1rem;
        max-width: 90%;
    }
`;

const TechnologiesIntro = styled.h2`
    font-size: var(--font-size-base);
    color: var(--color-secondary);
    font-weight: bold;
    margin-bottom: -0.5rem;

    @media (max-width: 425px) {
        margin-bottom: -1.5rem;
    }
`;

const TechnologiesTitle = styled.h2`
    font-size: var(--font-size-title);
    margin-bottom: 1rem;
    color: var(--color-font--dark);
`;

const TechCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    height: 30px;
    transition: transform 0.2s ease;
    margin: 0.5rem;

    @media (max-width: 425px) {
        width: 100%;
    }
`;

const TechIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 1rem;
`;

const TechName = styled.span`
    font-size: 1rem;
    color: var(--color-font--dark);
    margin: 0;
    font-family: var(--font-family-base);
`;

const TechList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    margin-top: 2rem;
    width: 90%;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
