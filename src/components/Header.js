import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import ScrollReveal from 'scrollreveal';

export const Header = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1500); 

        return () => clearTimeout(timer); 
    }, []);

    useEffect(() => {
        if (showContent) {
            const elements = document.querySelectorAll('.header-element');
            elements.forEach((el, index) => {
                ScrollReveal().reveal(el, {
                    distance: '50px',
                    duration: 500,
                    easing: 'ease-out',
                    origin: 'bottom',
                    opacity: 0,
                    delay: index * 300,
                });
            });
        }
    }, [showContent]);

    return (
        <HeaderContainer>
            {showContent && (
                <HeaderContent className="header-element">
                    <IntroText>Olá, o meu nome é</IntroText>
                    <MyNameText>Sofia Sawczenko</MyNameText>
                    <DeveloperTitleContainer>
                        <DeveloperTitle>Desenvolvedora</DeveloperTitle>
                        <TypewriterWrapper>
                            <Typewriter
                                options={{
                                    strings: ["Front-End.", "Back-End.", "Full-Stack."],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </TypewriterWrapper>
                    </DeveloperTitleContainer>
                    <Description>
                        Sou uma desenvolvedora Full-Stack especializada em Front-End,
                        comprometida com a experiência do cliente.
                    </Description>
                    <CurriculumButton>Curriculum Vitae</CurriculumButton>
                </HeaderContent>
            )}
        </HeaderContainer>
    );
};


const HeaderContainer = styled.div`
    background: linear-gradient(to bottom, #fcd3d3, #fbfafa);
    padding: 2rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
    max-width: 1200px;
    align-items: flex-start;
    text-align: left; 
`;

const IntroText = styled.div`
    color: var(--color-secondary);
    font-weight: bold;
`;

const MyNameText = styled.div`
    color: var(--color-font--dark);
    font-size: clamp(1.2rem, 4vw + 1rem, 3.5rem);
    font-weight: bold;
    margin: 1rem 0;
`;

const DeveloperTitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 375px) {
        flex-direction: column;
        align-items: flex-start; 
    }
`;

const DeveloperTitle = styled.div`
    font-size: clamp(1.2rem, 4vw + 1rem, 3.5rem);
    font-weight: bold;
    color: var(--color-font--dark);
    white-space: nowrap; 

    @media (max-width: 475px) {
        font-size: 22px; 
    }

    @media (max-width: 400px) {
        margin-bottom: -15%;
    }
`;

const TypewriterWrapper = styled.div`
    font-size: clamp(1.2rem, 3vw + 1rem, 3.5rem);
    color: var(--color-secondary);
    white-space: normal;
    word-wrap: break-word;

    @media (max-width: 375px) {
        margin-top: 0.5rem; 
    }

    @media (max-width: 475px) {
        font-size: 22px; 
    }
`;

const Description = styled.div`
    margin-top: 1rem;
    line-height: 1.6;
    font-size: 1rem;
    color: var(--color-font);

    @media (min-width: 768px) {
        font-size: 1.2rem;
        width: 50%;
    }
`;

const CurriculumButton = styled.button`
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--color-secondary);
    background-color: #FFE6E6;
    color: var(--color-secondary);
    font-size: 1rem;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var( --color-background--dark);
        color: var(--color-secondary);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
    }
`;
