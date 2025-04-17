import React from 'react';
import '../styles/Projects.css';

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
      title: 'Donut Shop',
      description: 'This is a fictional webshop selling donuts, built as a school project with specific functional requirements. Users can browse and select products to add to their shopping cart. From the cart, users can proceed to checkout where they\'ll find an order summary and a form for order and user details. The site is built with vanilla JavaScript and some simple helper tools, with extra attention given to accessibility aspects.',
      image: '/portfolio/images/gottfrids-main-page.jpg',
      demoLink: 'https://janisseibutis.github.io/Gottfrids-Munkar-webbshop/',
      codeLink: 'https://github.com/JanisSeibutis/Gottfrids-Munkar-webbshop?tab=readme-ov-file'
    },
    {
      title: 'Swedish Radio Podcasts',
      description: 'A simple site that displays humor podcasts from Swedish Radio using the Fetch API. Data is fetched either from an external API or localStorage if in development mode. The site includes a feature flag to simulate fetch errors for testing purposes. Users can click "Lyssna här" to listen to podcasts on Swedish Radio\'s platform. This project was a code refactoring assignment where I improved a messy, non-functional codebase by converting it to TypeScript, restructuring the code, and making it more maintainable and readable.',
      image: '/portfolio/images/light-mode.jpg',
      demoLink: 'https://janisseibutis.github.io/fed24d-arbetsmetodik-inl-1-JanisSeibutis/',
      codeLink: 'https://github.com/JanisSeibutis/fed24d-arbetsmetodik-inl-1-JanisSeibutis?tab=readme-ov-file'
    },
    {
      title: 'FakeApi Webshop',
      description: 'My first React project — a simple webshop built with modern web technologies. The project features client-side routing with TanStack Router, fetches and displays products from a fake API, and implements a clean webshop layout to simulate a real product listing experience. Built using Vite for fast development and React for the UI, this project demonstrates working with external APIs and modern React patterns.',
      image: '/portfolio/images/FakeApi.jpg',
      demoLink: 'https://janisseibutis.github.io/FakeApi-Webshop',
      codeLink: 'https://github.com/JanisSeibutis/FakeApi-Webshop'
    },
    {
      title: 'Disney Quiz Game',
      description: 'A collaborative team project creating an interactive Disney-themed quiz game. Built with TypeScript and SASS, the game features a timer to track completion time, a points system, and an engaging user interface. This project was developed using agile methodologies with Trello for project management, demonstrating effective team collaboration and modern development practices.',
      image: '/portfolio/images/disney-quiz.png',
      demoLink: 'https://janisseibutis.github.io/Disney-quiz/',
      codeLink: 'https://github.com/JanisSeibutis/Disney-quiz'
    },
    {
      title: "Poseidon's Retreat",
      description: 'A collaborative Vue.js project developed in two phases. First, a design team created a responsive website design with consistent styling. Then, our development team implemented the design using Vue.js and TypeScript. This spa-themed website showcases modern front-end development practices, responsive design principles, and effective team collaboration across different project phases.',
      image: '/portfolio/images/poseidons-retreat.jpg',
      demoLink: 'https://janisseibutis.github.io/Poseidons-retreat/',
      codeLink: 'https://github.com/JanisSeibutis/Poseidons-retreat'
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              {project.codeLink && <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 