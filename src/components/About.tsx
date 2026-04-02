import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>Om mig</h2>
      <div className="about-content">
        <p>
          Jag tar snart examen från Medieinstitutet i Stockholm, där jag har gått en tvåårig
          yrkeshögskoleutbildning inom frontendutveckling. Utbildningen har gett mig en stabil grund
          inom modern webbutveckling och design, samt praktisk erfarenhet av att arbeta i verkliga
          projektmiljöer.
        </p>
        <p>
          Jag söker nu en roll som junior webbutvecklare där jag kan fortsätta utvecklas och samtidigt
          bidra med mina kunskaper och min problemlösningsförmåga. Jag har ett stort intresse för att
          arbeta med AI-verktyg och fokuserar på att använda dem så effektivt som möjligt för att
          förbättra arbetsflöden, öka produktivitet och skapa smartare lösningar.
        </p>
        <p>
          Jag drivs av att ständigt lära mig nya saker och tycker om att utforska nya tekniker och
          arbetssätt för att skapa användarvänliga och effektiva digitala upplevelser. På fritiden
          tränar jag, kör motorcykel, fiskar och umgås med vänner och familj.
        </p>
      </div>
    </section>
  );
};

export default About; 