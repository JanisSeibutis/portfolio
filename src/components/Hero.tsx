import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Janis Seibutis</h1>
        <h2>Upcoming Web Developer</h2>

        <div className="profile-image-container">
          <img 
            src="/portfolio/images/profile.jpeg" 
            alt="Profile" 
            className="profile-image"
          />
        </div>
        <p>I'm currently looking for an internship. The internship is divided into two parts, with my final examination project in between.</p>
        <div className="internship-dates">
          <div className="date-column">
            <h3>First Period</h3>
            <p>October 13, 2025 – December 19, 2025</p>
          </div>
          <div className="date-column">
            <h3>Second Period</h3>
            <p>February 2, 2026 – May 22, 2026</p>
          </div>
        </div>
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
          View CV
        </a>
      </div>
    </section>
  );
};

export default Hero; 