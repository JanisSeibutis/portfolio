import React from "react";
import "../styles/Skills.css";

const Skills: React.FC = () => {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Shadcn",
    "Tailwind",
    "Vibe coding",
    "Cursor",
    "Git",
    "Github",
    "JavaScript",
    "HTML/CSS",
    "Agile/Scrum",
  ];
  const learningSkills = [
    "PostgreSQL",
    "Supabase",
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
