import React from 'react';
import "../styles/ProjectCard.css";
import { NavLink } from 'react-router-dom';

function ProjectCard({title, imageUrl, description, link}) {
  return (
    <div className="project">
      <div className="project-card">
        <div className="image-container">
          <img src={imageUrl} alt="" />
          <h3>{title}</h3>
          <p>{description.map(item => (
              <span>{item}</span>
            ))}
          </p>
        </div>
        <button type="button" className="btn">
          <NavLink to={link} style={{color:'#fff', fontWeight:'bolder'}}>Code</NavLink>
        </button>
      </div>
    </div>

  )

  /*return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} width="300px" height="200px" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className="button">
          <NavLink to={link} className="btn">View </NavLink>
        </div>
      </Card.Body>
    </Card>
  );*/

}

export default ProjectCard