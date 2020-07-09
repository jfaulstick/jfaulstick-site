import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const ProjectCard = (props) => {
  const ProjectImgs = () => {
    return props.images.map((image) => (
      <a href={image} target='_blank' rel="noopener noreferrer">
        <img src={image} className="project-card--img" alt={props.title} />
      </a>
    ));
  };

  const ProjectParagraphs = () => {
    return props.paras.map((para) => <p>{para}</p>)
  }

  const ProjectTechs = () => {
    return props.techs.map((tech) => <div className='project--tech-item' key={tech}>{tech}</div>)
  }

  return (
    <div className="project-card">
      {props.logo ? (
        <div className="project-card--logo">
          {props.displayBoth ? <div className="project-card--title">{props.title}</div> : <span></span>}
          <img src={props.logo} className="project-card--logo-img" alt={`${props.title}-logo`}/>
        </div>
      ) : (
        <div className="project-card--title">{props.title}</div>
      )}
      <div className="project-card--content">
        <div className="project-card--img-container">
          {props.images ? <ProjectImgs /> : <span></span>}
        </div>
        <div className="project-card--text-container">
          {props.paras ? <ProjectParagraphs /> : <span></span>}
        </div>
        <div className='project-card--tech-container'>{props.techs ? <ProjectTechs /> : <span></span>}</div>
        <div className="project-card--link-container">
          {props.github ? (<a href={props.github} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='project-card--link' /></a> ) : <div></div>}
          {props.github ? (<a href={props.demo} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className='project-card--link' /></a> ) : <div></div>}
        </div>
      </div>
    </div>
  );
};
