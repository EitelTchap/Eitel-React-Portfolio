import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Wrapper from '../components/Wrapper';
import projects from "../components/ProjectGallery/projects.json"

function Projects() {

  return (
    <Wrapper>
    <h1>Some of my projects so far!</h1>
    {projects.map((projects)  => (
    <ProjectCard
      key={projects.id}
      name={projects.name}
      image={projects.image}
      deployedUrl={projects.deployedUrl}
      githubUrl={projects.githubUrl}
      description={projects.description}
    />
    ))}
    </Wrapper>
    );
}

export default Projects;
