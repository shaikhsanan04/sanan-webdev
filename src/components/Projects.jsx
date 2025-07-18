import { useState } from 'react';
import './Projects.css';
import { AG } from "../assets/AG-portfolio.png"
import { BW } from "../assets/B-W.png"
import { BS } from "../assets/book-search.png"
import { CNC } from "../assets/creams-cakes-laptop-mockupcc.png"
import { DB } from "../assets/d-b.png"
import { HS } from "../assets/hero-section.png"
import { IF } from "../assets/image-first.png"
import { ID } from "../assets/invoice-dashboard.png"
import { silva } from "../assets/silva.png"
import { tun } from "../assets/tunisia.png"
import { tys } from "../assets/typesprint-image.png"

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web-design');
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectsData = {
    'web-design': [
      {
        id: 1,
        title: 'Resumake AI',
        description: 'A sleek and modern SaaS Tool website with modern design elements and smooth animations.',
        image: {IF},
        link: 'https://www.figma.com/design/E8XG9LGiFE1Bu6TEVBRWNq/ResuMake-AI?node-id=35-423&t=gybhTBQLVCLC1twG-0'
      },
      {
        id: 2,
        title: 'Creams N Cakes',
        description: 'An amazing portfolio website showcasing peak creativity work with their stunning cakes.',
        image: {CNC},
        link: 'https://www.figma.com/design/LDVoET6fobtM6eNN9g61HQ/creams-n-cakes?node-id=12-129&t=mPB4GzkFmtZuJdAh-0'
      },
      {
        id: 3,
        title: 'Alasa Art Studio',
        description: 'An artistic portfolio website showcasing creative work with stunning visual effects.',
        image: {HS},
        link: 'https://www.figma.com/design/CDldSY760WFfamHH1PxXUw/new-alasa?node-id=1-2&t=mPB4GzkFmtZuJdAh-0'
      },
    ],
    'wordpress': [
      {
        id: 7,
        title: 'Bluewaters Property Dubai Landing Page',
        description: 'A professional business website built with Wix featuring custom styling and smooth parallax effect.',
        image: {BW},
        link: 'https://www.tlreproperties.site/bluewaters-island-b2-510'
      },
      {
        id: 8,
        title: 'Silva Property Landing Page',
        description: 'A Sleek and professional landing page made in WordPress for a Dubai Property',
        image: {silva},
        link: 'https://theluxuryrealestate.ae/silva-by-emaar/'
      },
      {
        id: 9,
        title: 'Tunisia Roadshow Landing Page',
        description: 'A Landing page made for Tunisia Roadshow, Showcasing why one should abuy a property in Dubai',
        image: {tun},
        link: 'https://theluxuryrealestate.ae/elementor-landing-page-33227/ '
      },
    ],
    'react': [
      {
        id: 13,
        title: 'Book Search App',
        description: 'A powerful Book Search application with over 20M+ Books.',
        image: {BS},
        link: 'https://shaikhsanan04.github.io/BookSearch/'
      },
      {
        id: 14,
        title: 'Data Analyst Portfolio Website',
        description: 'A modern portfolio website for a data analyst, carefull design with modern layouts',
        image: { AG },
        link: 'https://shaikhsanan04.github.io/ayaan-data-analyst-portfolio/'
      },
      {
        id: 15,
        title: 'Invoice Generator App',
        description: 'A simple and modern Invoice App to create, edit, and manage client invoices with ease.',
        image: {ID},
        link: 'https://shaikhsanan04.github.io/Professional-Invoice-Management-App/'
      },

      {
        id: 16,
        title: 'TypeSprint',
        description: 'TypeSprint is a sleek and minimal typing speed tester that challenges your accuracy and speed in real-time.',
        image: {tys},
        link: 'https://shaikhsanan04.github.io/TypeSprint/'
      },

      {
        id: 17,
        title: 'Weather Dashboard',
        description: 'An interactive weather dashboard with location-based forecasts and beautiful visualizations.',
        image: {DB},
        link: 'https://shaikhsanan04.github.io/weather-app/'
      },
    ]
  };

  const tabs = [
    { id: 'web-design', label: 'Web Design' },
    { id: 'wordpress', label: 'WordPress/Wix' },
    { id: 'react', label: 'React JS' }
  ];

  const currentProjects = projectsData[activeTab] || [];
  const displayedProjects = currentProjects.slice(0, visibleProjects);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVisibleProjects(3);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;

  // Mobile layout - render all projects by category
  if (isMobile) {
    return (
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title fade-in">My Projects</h2>

          {/* Web Design Projects */}
          <div className="mobile-category">
            <h3 className="mobile-category-title">Web Design</h3>
            <div className="projects-grid">
              {projectsData['web-design'].map((project, index) => (
                <div
                  key={project.id}
                  className="project-card glass-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <a href={project.link} className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">
                      Visit Site
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WordPress/Wix Projects */}
          <div className="mobile-category">
            <h3 className="mobile-category-title">WordPress/Wix</h3>
            <div className="projects-grid">
              {projectsData['wordpress'].map((project, index) => (
                <div
                  key={project.id}
                  className="project-card glass-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <a href={project.link} className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">
                      Visit Site
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* React JS Projects */}
          <div className="mobile-category">
            <h3 className="mobile-category-title">React JS</h3>
            <div className="projects-grid">
              {projectsData['react'].map((project, index) => (
                <div
                  key={project.id}
                  className="project-card glass-card scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <a href={project.link} className="project-link">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">
                      Visit Site
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - original tabbed interface
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>

        <div className="projects-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card glass-card scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="btn btn-primary">
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < currentProjects.length && (
          <div className="load-more-container">
            <button className="btn btn-secondary" onClick={loadMoreProjects}>
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
