import React from "react";
import "../styles/Skills.css";

const Skills: React.FC = () => {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Supabase",
    "Shadcn",
    "Tailwind",
    "Vibe-kodning",
    "Cursor",
    "Git",
    "GitHub",
    "JavaScript",
    "HTML/CSS",
    "Agile/Scrum",
  ];
  const learningSkills = [
    "PostgreSQL",
    "Node.js",
    "Mysql",
    "phpMyAdmin",
    "Express",
    "MongoDB",
    "Vue",
    "Figma",
    "SCSS",
  ];

  return (
    <section className="skills">
      <h2>Kunskaper och verktyg</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>

      <h3 className="learning-title">Har arbetat med</h3>
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
