import React from 'react';
// import API from '../utils/API';    //Calls a Giphy API
import ProjectCard from '../components/ProjectCard';
import Wrapper from '../components/Wrapper';
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
