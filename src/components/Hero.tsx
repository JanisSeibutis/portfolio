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
        <p>Currently i am a student at Medieinstitutet in Stockholm, Sweden</p>
        <a 
          href="/portfolio/Janis_Seibutis_CV.pdf" 
          download
          className="cv-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero; 