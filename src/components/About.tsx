import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>Om mig</h2>
      <div className="about-content">
        <p>
          Jag är nyexaminerad frontendutvecklare från Medieinstitutet i Stockholm med en tvåårig
          yrkeshögskoleutbildning inom frontendutveckling. Under utbildningen har jag fått en stabil
          grund inom modern webbutveckling, design och praktiskt arbete i projektmiljöer.
        </p>
        <p>
          Just nu söker jag en roll som junior webbutvecklare där jag kan fortsätta utvecklas och
          bidra med mina kunskaper, min problemlösningsförmåga och mitt intresse för nya tekniker.
          Jag har även ett stort intresse för AI-verktyg och hur de kan användas för att förbättra
          arbetsflöden, öka produktivitet och skapa smartare lösningar.
        </p>
        <p>
          Jag tycker om att bygga användarvänliga och effektiva digitala upplevelser, och drivs av
          att hela tiden lära mig mer. På fritiden tränar jag, kör motorcykel, fiskar och umgås med
          vänner och familj.
        </p>
      </div>
    </section>
  );
};

export default About; 