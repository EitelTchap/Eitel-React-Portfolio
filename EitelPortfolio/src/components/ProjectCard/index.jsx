import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project title:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed URL:</strong> <a href={props.deployedUrl} target='_blank'>{props.deployedUrl}</a>
          </li>
          <li>
            <strong>GitHub Repository:</strong> <a href={props.githubUrl} target='_blank'>{props.githubUrl}</a>
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
