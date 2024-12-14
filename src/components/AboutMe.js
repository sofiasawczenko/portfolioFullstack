import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <section className="about-me py-5" id="about">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {/* Coluna para a imagem */}
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                        <div className="picture-container">
                            <div className="picture-wrapper">
                                <img
                                    alt="foto"
                                    src="/images/PictureSofia.svg"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-md-left">
                        <div className="content-container">
                            <div className="about-me-intro text-uppercase text-muted mb-3">Um pouco sobre mim</div>
                            <h2 className="about-me-title mb-4">Sobre</h2>
                            <p className="about-me-text">
                                Meu interesse e primeiro contato com tecnologia começou em 2003, quando minha avó abriu uma Lan House. Eu tive a oportunidade de acompanhar a evolução da tecnologia de perto e definitivamente isso foi significativo para eu trilhar esse caminho.
                                <br />
                                <br />
                                Atualmente desenvolvo no Front-end com foco na construção de componentes reutilizáveis. Já atuei como suporte técnico, fazendo atendimento a usuários e resolução de erros de Integração API.
                                <br />
                                <br />
                                Sou uma pessoa bem analítica e detalhista, e o meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo para entregar valor e experiência aos usuários/clientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
