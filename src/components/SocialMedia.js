import { useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';

export const SocialMedia = () => {
    useEffect(() => {
        ScrollReveal().reveal('.social-media', {
            distance: '50px',
            duration: 2000,
            easing: 'ease-out',
            origin: 'top',
            opacity: 0,
        });
    }, []);

    return (
        <SocialMediaContainer className="social-media">
            <SocialMediaIcons>
                <a href="https://github.com/sofiasawczenko" target="_blank" rel="noopener noreferrer">
                    <img alt="GitHub" src="/images/github.svg" />
                </a>
                <a href="https://www.linkedin.com/in/sofia-sawczenko/" target="_blank" rel="noopener noreferrer">
                    <img alt="LinkedIn" src="/images/linkedin.svg" />
                </a>
            </SocialMediaIcons>
            <SocialMediaLine />
        </SocialMediaContainer>
    );
};

const SocialMediaContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

const SocialMediaIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: 60%;


    img {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const SocialMediaLine = styled.div`
    margin-top: 1rem;
    width: 2px;
    height: 100px;
    background-color: #3d4351;
    opacity: 30%;
`;
