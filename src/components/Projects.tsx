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
  const featuredProject: Project = {
    title: "FirmaLokalt",
    description:
      "FirmaLokalt är en plattform som kopplar samman privatpersoner med lokala tjänsteföretag inom bland annat bygg, städning, flytt och IT. Användare kan snabbt skicka in en strukturerad förfrågan, matchas med relevanta företag och få svar på ett och samma ställe – vilket gör det enkelt att jämföra och välja rätt aktör. Plattformen innehåller även adminverktyg för att hantera organisationer och leads. Projektet är utvecklat helt självständigt av mig. Den är byggd med Next.js och TypeScript i frontend, Supabase (PostgreSQL, Auth, Edge Functions) i backend, samt Stripe för betalningar, Resend för e-post och Vercel för hosting.",
    image: "/portfolio/images/Firmalokalt.jpg",
    demoLink: "https://firmalokalt.se/",
  };

  const projects: Project[] = [
    {
      title: "Jobsearch (Digi Design Taxonomy)",
      description:
        "Ett grupprojekt där vi byggde en modern, tillgänglig och responsiv plattform för att söka och visa jobbannonser. Lösningen använder Arbetsförmedlingens designsystem och Taxonomy API, med egen UX och layout. Jag ansvarade för implementationen av sökfunktionaliteten samt integrationen mot API:erna.",
      image: "/portfolio/images/Jobsearch.jpg",
      demoLink:
        "https://janisseibutis.github.io/Digi-design-system-with-taxonomy-api/",
      codeLink:
        "https://github.com/JanisSeibutis/Digi-design-system-with-taxonomy-api",
    },
    {
      title: "Donut Shop",
      description:
        "En fiktiv webbshop byggd i vanilla JavaScript. Besökare kan lägga produkter i varukorgen och gå vidare till checkout med ordersammanfattning och formulär. Fokus lades på tillgänglighet och validering med regex.",
      image: "/portfolio/images/gottfrids-main-page.jpg",
      demoLink: "https://janisseibutis.github.io/Gottfrids-Munkar-webbshop/",
      codeLink:
        "https://github.com/JanisSeibutis/Gottfrids-Munkar-webbshop?tab=readme-ov-file",
    },
    {
      title: "Swedish Radio Podcasts",
      description:
        "En enklare webbplats som visar humorpoddar från Sveriges Radio med Fetch API. Detta var en refaktorering där jag byggde om en rörig kodbas till TypeScript, strukturerade upp koden och gjorde den mer läsbar och hållbar.",
      image: "/portfolio/images/light-mode.jpg",
      demoLink:
        "https://janisseibutis.github.io/fed24d-arbetsmetodik-inl-1-JanisSeibutis/",
      codeLink:
        "https://github.com/JanisSeibutis/fed24d-arbetsmetodik-inl-1-JanisSeibutis?tab=readme-ov-file",
    },
    {
      title: "Disney Quiz Game",
      description:
        "Ett teamprojekt där vi skapade ett interaktivt Disney-quiz med TypeScript och SASS. Spelet innehåller timer, poängsystem och ett engagerande gränssnitt. Arbetet genomfördes agilt med Trello.",
      image: "/portfolio/images/Disney-quiz.png",
      demoLink: "https://janisseibutis.github.io/Disney-quiz/",
      codeLink: "https://github.com/JanisSeibutis/Disney-quiz",
    },
    {
      title: "Poseidon's Retreat",
      description:
        "Ett samarbetsprojekt i Vue.js och TypeScript som genomfördes i två faser: design och implementation. Resultatet blev en responsiv spa-webbplats med fokus på moderna arbetssätt inom frontend.",
      image: "/portfolio/images/Poseidons-retreat.png",
      demoLink: "https://janisseibutis.github.io/Poseidons-retreat/",
      codeLink: "https://github.com/JanisSeibutis/Poseidons-retreat",
    },
  ];

  return (
    <section className="projects">
      <h2>Projekt</h2>
      <h3 className="projects-subtitle">Utvalda arbeten och skolprojekt</h3>

      <div className="featured-project">
        <h3 className="section-title">Huvudprojekt</h3>
        <div className="project-card featured-card">
          <div className="project-image-container">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="project-image"
            />
          </div>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.description}</p>
          <div className="project-links">
            {featuredProject.demoLink && (
              <a
                href={featuredProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Besök webbplats
              </a>
            )}
          </div>
        </div>
      </div>

      <h3 className="section-title">Fler projekt</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card secondary-card">
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
                  Visa demo
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Källkod
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
