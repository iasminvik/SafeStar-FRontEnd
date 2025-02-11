import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/outlast.css';

import screenshot1 from '../img/outlast2.png';
import screenshot2 from '../img/outlast3.png';
import screenshot3 from '../img/outlast5.png';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

// Componente do botão de download
function DownloadButton() {
  return (
    <div className="text-center mt-4">
      <a href="/path/to/game-download.zip" className="btn btn-success btn-lg" download>Baixar Jogo</a>
    </div>
  );
}

// Componente da descrição do jogo
function GameDescription() {
  return (
    <div className="container mt-4">
      <h2>Sobre o Jogo</h2>
      <p>O inferno é um experimento ao qual você não pode sobreviver em Outlast, um jogo de survival horror em primeira pessoa desenvolvido por veteranos de algumas das maiores franquias de jogos da história. Como o jornalista investigativo Miles Upshur, explore o Mount Massive Asylum e tente sobreviver o suficiente para descobrir seu terrível segredo... se você ousar.
      </p>
    </div>
  );
}

// Componente do cabeçalho da página "Sobre Nós"
function AboutUsHeader() {
  return (
    <header className="header">
    <Link to="/home">
      <img src={logo} alt="Logo" className="logo" />
    </Link>
    <nav className="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/sobreNos">Sobre nós</Link>
      <Link to="/suporte">Suporte</Link> {/* Link de Suporte no lugar de Jogos */}
    </nav>
  </header>
  );
}

// Componente do cabeçalho do jogo
function Header() {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>Outlast</h1>
    </header>
  );
}

// Componente de screenshots
function Screenshots() {
  const screenshots = [
    { src: screenshot1, alt: 'Screenshot 1' },
    { src: screenshot2, alt: 'Screenshot 2' },
    { src: screenshot3, alt: 'Screenshot 3' },
  ];

  return (
    <div className="container mt-4 screenshots">
      <div className="row">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="col-md-4">
            <img src={screenshot.src} alt={screenshot.alt} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente dos requisitos do sistema
function SystemRequirements() {
  return (
    <div className="container mt-4">
      <h2>Requisitos do Sistema</h2>
      <ul>
        <li>Sistema Operacional:   Windows Vista / 7 / 8 - 64 bits</li>
        <li>Processador: 2.8 GHz Quad Core CPU</li>
        <li>Memória: 3 GB de RAM</li>
        <li>Gráficos: 1GB NVIDIA GTX 460 / ATI Radeon HD 6850</li>
        <li>Armazenamento: 5 GB de espaço disponível</li>
      </ul>
    </div>
  );
}

// Componente do rodapé
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>
        <h6>© 2024 SafeStar. Todos os direitos reservados.</h6>
        <div className="footer-contact">
          <p>Email para contato: SafeStar@gmail.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link> {/* Link para a página Home */}
          <Link to="/sobreNos">Sobre nós</Link>
          <Link to="/suporte">Suporte</Link>
          <a href="#nossos-jogos">Jogos</a> {/* Link para a seção "Nossos Jogos" */}
        </div>
      </div>
    </footer>
  );
}

// Definindo o componente Fobia
function Outlast() {
  return (
    <div>
      <AboutUsHeader /> {/* Cabeçalho da página Sobre Nós */}
      <Header />
      <GameDescription />
      <Screenshots />
      <SystemRequirements />
      <DownloadButton />
      <Footer />
    </div>
  );
}

export default Outlast;
