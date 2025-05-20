import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skills = ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'SCSS', 'Git', 'Figma', 'Agile/Scrum'];
  const learningSkills = ['Node.js', 'Mysql', 'phpMyAdmin', 'Express', 'MongoDB', 'Vue', 'Next.js'];

  return (
    <section className="skills">
      <h2>Skills and Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
      
      <h3 className="learning-title">Have Touched</h3>
      <div className="skills-grid learning">
        {learningSkills.map((skill, index) => (
          <div key={index} className="skill-card learning">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 