import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-image-container">
          <img 
            src="/portfolio/images/portrait-2-portfolio.png" 
            alt="Profile" 
            className="profile-image"
          />
        </div>
        <div className="hero-left-content">
          <div className="hero-header">
            <h1>Hej, jag heter Janis Seibutis</h1>
            <h2>Junior Webbutvecklare</h2>
          </div>
          <div className="hero-text-content">
          <p>Jag söker just nu jobb som junior webbutvecklare och tar snart examen från Medieinstitutet. Jag har även en praktikperiod kvar fram till den 22 maj 2026 och är öppen för att göra resterande del av min praktik hos en potentiell arbetsgivare.</p>
          <a 
            href="https://medieinstitutet.se/utbildningar/front-end-developer/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="/portfolio/images/medieinstitutet.png" 
              alt="Medieinstitutet Logo" 
              className="medieinstitutet-logo"
            />
          </a>
          <a 
            href="/portfolio/Janis_Seibutis_CV.pdf" 
            className="cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visa CV
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 