import styled from "styled-components";

export const ContactMe = () => {
    return (
        <ContactMeContainer>
            <ContactMeContent className="ContactMeContent">
                <ContactMeTitle>Entre em Contato</ContactMeTitle>
                <ContactMeText>
                    Qualquer dúvida ou se deseja apenas dar o seu oi ou feedback, estarei feliz em receber e assim que possível irei te retornar!
                </ContactMeText>
                <ContactMeButton href="mailto:sofiawko@gmail.com">Diga Olá!</ContactMeButton>
            </ContactMeContent>
        </ContactMeContainer>
    );
};

const ContactMeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
`;

const ContactMeContent = styled.div`
    text-align: center;
    max-width: 600px;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ContactMeTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--color-font--dark);
    margin-bottom: 1rem;
`;

const ContactMeButton = styled.a`
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--color-secondary);
    background-color: #FFE6E6;
    color: var(--color-secondary);
    font-size: 1rem;
    border-radius: 0.2rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;
    align-self: center;
    
    &:hover {
        background-color: var(--color-background--dark);
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

const ContactMeText = styled.p`
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    color: var(--color-font);
    line-height: 1.6;
    text-align: center;
`;
