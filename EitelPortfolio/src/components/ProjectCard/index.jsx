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
            <strong>Deployed URL:</strong> {props.deployedUrl}
          </li>
          <li>
            <strong>GitHub Repository:</strong> {props.githubUrl}
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
