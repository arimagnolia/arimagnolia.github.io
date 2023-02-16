import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import Portfolio from "../data/projects";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>Portfolio.</h2>
      <div className="subtitle-proj"><p>A collection of some of my works.</p></div>
        <div className="project-section">
            {Portfolio.map(portfolio_items => (<ProjectCard 
            title={portfolio_items.title}
            imageUrl={portfolio_items.imageUrl}
            description={portfolio_items.description}
            link={portfolio_items.link}
            />
          ))}
        </div>
    </div>
  );
}

export default Projects