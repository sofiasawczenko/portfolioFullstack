import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link, index) => {
            ScrollReveal().reveal(link, {
                distance: '50px',
                duration: 500,
                easing: 'ease-out',
                origin: 'top',
                opacity: 0,
                delay: index * 200,
            });
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavContainer className="navbar" isScrolled={isScrolled}>
            <NavContent>
                <NavName>
                    <AngleBrackets>&lt;</AngleBrackets>
                    <NameText>sofiasawczenko</NameText>
                    <AngleBrackets>/&gt;</AngleBrackets>
                </NavName>
                <Hamburger
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={isMenuOpen ? 'open' : ''}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </Hamburger>
                <NavLinks isOpen={isMenuOpen}>
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">Sobre</a>
                    <a href="#experiences" className="nav-link">Experiências</a>
                    <a href="#projects" className="nav-link">Projetos</a>
                    <a href="#contact" className="nav-link">Contato</a>
                </NavLinks>
            </NavContent>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    background: ${props => (props.isScrolled ? 'linear-gradient(to left, #fcd3d3, #fbfafa)' : '#fcd3d3')};
    box-shadow: ${props => (props.isScrolled ? '0 4px 8px rgba(2, 12, 27, 0.1)' : 'none')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background 0.1s, box-shadow 0.1s;
`;

const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 0.3rem;
    z-index: 1100;

    div {
        width: 25px;
        height: 3px;
        background-color: #4b4b4b;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
    }

    &.open div:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
        background-color: #3d4351;
    }

    &.open div:nth-child(2) {
        opacity: 0;
    }

    &.open div:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
        background-color: #3d4351;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    font-size: 0.9rem;
    letter-spacing: 1px;

    a {
        position: relative;
        text-decoration: none;
        color: ${props => (props.isOpen ? '#3d4351' : '#3d4351')};
        transition: color 0.3s ease-in-out;

        &:hover {
            color: var(--color-secondary);
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -2px; 
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #f8c6d2, #e78fa1);
            transition: width 0.5s ease-in-out, left 0.5s ease-in-out;
            opacity: 0;
        }

        &:hover::after {
            width: 100%; 
            left: 0; 
            opacity: 1; 
        }

        &:hover {
            color: var(--color-secondary);
        }
    }

    @media (max-width: 768px) {
        display: ${props => (props.isOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background-color: #fcd3d3;
        padding: 1rem 0;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
    }
`;

const NavName = styled.div`
    display: flex;
    align-items: center;
`;

const AngleBrackets = styled.div`
    color: var(--color-secondary);
    font-weight: bold;
    margin: 0 0.5rem;
`;

const NameText = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
`;
