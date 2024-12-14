import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import styled from 'styled-components';

export const SocialMedia = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1500);

        return () => clearTimeout(timer); 
    }, []);

    useEffect(() => {
        if (showContent) {
            const elements = document.querySelectorAll('.social-media');
            ScrollReveal().reveal(elements, {
                distance: '50px',
                duration: 1000,
                easing: 'ease-out',
                origin: 'bottom',
                opacity: 0,
                delay: 300, 
            });
        }
    }, [showContent]);

    return (
        <>
            {showContent && ( 
                <SocialMediaContainer className="social-media">
                    <SocialMediaIcons>
                        <a href="https://github.com/sofiasawczenko" target="_blank" rel="noopener noreferrer">
                            <img alt="GitHub" src={require('../assets/images/github.svg').default} className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/sofia-sawczenko/" target="_blank" rel="noopener noreferrer">
                            <img alt="LinkedIn" src="/images/linkedin.svg" className="social-icon" />
                        </a>
                    </SocialMediaIcons>
                    <SocialMediaLine />
                </SocialMediaContainer>
            )}
        </>
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
    z-index: 1000;

    @media (max-width: 768px) {
        display: none;
    }
`;

const SocialMediaIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: 60%;

    .social-icon {
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
