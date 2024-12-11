import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";

export const Footer = () => {
    useEffect(() => {
        ScrollReveal().reveal(".FooterComponent", {
            distance: "30px",
            duration: 1500,
            easing: "ease-in-out",
            origin: "bottom",
            opacity: 0,
        });
    }, []);

    return (
        <FooterComponent className="FooterComponent">
            <FooterContent>
                <FooterText>
                    &copy; 2024 | Sofia Sawczenko
                </FooterText>
                <FooterLinks>
                    <FooterLink href="https://www.linkedin.com/in/sofia-sawczenko/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </FooterLink>
                    <FooterLink href="https://github.com/sofiasawczenko" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </FooterLink>
                    <FooterLink href="mailto:sofiawko@gmail.com">
                        E-mail
                    </FooterLink>
                </FooterLinks>
            </FooterContent>
        </FooterComponent>
    );
};

const FooterComponent = styled.footer`
    color: var(--color-font--light);
    padding: 1.5rem 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 10rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const FooterContent = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const FooterText = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const FooterLinks = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

const FooterLink = styled.a`
    color: var(--color-font--light);
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
        color: var(--color-secondary);
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;
