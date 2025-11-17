import React from "react";
import "../styles/Projects.css";

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  codeLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Jobsearch (Digi Design Taxonomy)",
      description:
        "This project is a group-built web application that leverages Arbetsförmedlingen's open source Design System and the Taxonomy API to create a modern, accessible, and responsive platform for searching and viewing job ads. The application is inspired by Arbetsförmedlingen's own job search tools but is designed with our own UX, colors, and layout choices — ensuring both functionality and originality while maintaining accessibility and consistency through the design system.",
      image: "/portfolio/images/Jobsearch.jpg",
      demoLink:
        "https://janisseibutis.github.io/Digi-design-system-with-taxonomy-api/",
      codeLink:
        "https://github.com/JanisSeibutis/Digi-design-system-with-taxonomy-api",
    },
    {
      title: "Donut Shop",
      description:
        "This is a fictional webshop selling donuts, built as a school project with specific functional requirements. Users can browse and select products to add to their shopping cart. From the cart, users can proceed to checkout where they'll find an order summary and a form for order and user details. The site is built with vanilla JavaScript and some simple helper tools, with extra attention given to accessibility aspects and form validation with regex.",
      image: "/portfolio/images/gottfrids-main-page.jpg",
      demoLink: "https://janisseibutis.github.io/Gottfrids-Munkar-webbshop/",
      codeLink:
        "https://github.com/JanisSeibutis/Gottfrids-Munkar-webbshop?tab=readme-ov-file",
    },
    {
      title: "Swedish Radio Podcasts",
      description:
        'A simple site that displays humor podcasts from Swedish Radio using the Fetch API. Data is fetched either from an external API or localStorage if in development mode. The site includes a feature flag to simulate fetch errors for testing purposes. Users can click "Lyssna här" to listen to podcasts on Swedish Radio\'s platform. This project was a code refactoring assignment where I improved a messy, non-functional codebase by converting it to TypeScript, restructuring the code, and making it more maintainable and readable.',
      image: "/portfolio/images/light-mode.jpg",
      demoLink:
        "https://janisseibutis.github.io/fed24d-arbetsmetodik-inl-1-JanisSeibutis/",
      codeLink:
        "https://github.com/JanisSeibutis/fed24d-arbetsmetodik-inl-1-JanisSeibutis?tab=readme-ov-file",
    },
    {
      title: "Disney Quiz Game",
      description:
        "A collaborative team project creating an interactive Disney-themed quiz game. Built with TypeScript and SASS, the game features a timer to track completion time, a points system, and an engaging user interface. This project was developed using agile methodologies with Trello for project management, demonstrating effective team collaboration and modern development practices.",
      image: "/portfolio/images/Disney-quiz.png",
      demoLink: "https://janisseibutis.github.io/Disney-quiz/",
      codeLink: "https://github.com/JanisSeibutis/Disney-quiz",
    },
    {
      title: "Poseidon's Retreat",
      description:
        "A collaborative Vue.js project developed in two phases. First, a design team created a responsive website design with consistent styling. Then, our development team implemented the design using Vue.js and TypeScript. This spa-themed website showcases modern front-end development practices, responsive design principles, and effective team collaboration across different project phases.",
      image: "/portfolio/images/Poseidons-retreat.png",
      demoLink: "https://janisseibutis.github.io/Poseidons-retreat/",
      codeLink: "https://github.com/JanisSeibutis/Poseidons-retreat",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <h3 className="projects-subtitle">
        (more advanced projects to come as i continue my education)
      </h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
