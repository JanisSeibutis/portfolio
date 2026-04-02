import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Kontakt</h2>
      <div className="contact-content">
        <p>Jag söker just nu nya möjligheter!</p>
        <div className="social-links">
          <a 
            href="https://github.com/JanisSeibutis" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link github"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/janis-seibutis-61a058343/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link linkedin"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <a href="mailto:Janis.Seibutis@medieinstitutet.se" className="contact-button">Hör av dig</a>
      </div>
    </section>
  );
};

export default Contact; 