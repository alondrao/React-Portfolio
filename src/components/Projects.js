import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description</p>
          <a href="http://project1-url.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/*add more projects of my own*/}
      </div>
    </section>
  );
};

export default Projects;
