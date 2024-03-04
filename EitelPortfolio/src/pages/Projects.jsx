import React from 'react';
// import API from '../utils/API';    //Calls a Giphy API
import ProjectCard from '../components/ProjectCard';
import Container from '../components/Container';
import projects from "../components/ProjectGallery/projects.json"

function Projects() {

    // API.getRandomGif()
    //   .then((res) => {
    //     const GifUrl = res.data.images.original.url;
    //     console.log(GifUrl);
    //     //Insert text to HTML
    //     document.getElementById('gif-image').src = GifUrl;   //Gif
    //   })
    //   .catch((err) => console.log(err));
  

  return (
    <Container>
    {projects.map((project)  => (
    <ProjectCard
      id={project.id}
      name={projects.name}
      image={projects.image}
      deployedUrl={projects.deployedUrl}
      githubUrl={projects.githubUrl}
      description={projects.description}
    />
    ))}
    </Container>
    );
}

export default Projects;
