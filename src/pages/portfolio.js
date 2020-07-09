import React from "react";

import { Element, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { ContactBar } from "../components/contact-bar";
import { ProjectCard } from "../components/project-card";

import { projects } from '../db/projects';

export const PortfolioPage = () => {
  return (
    <Element name="portfolio">
      <div className="page page--portfolio" id="portfolio-page">
        <div className="chevron-up--container">
          <Link to="skills" smooth={true}>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="chevron chevron-primary"
            />
          </Link>
        </div>
        <div className="page--main-content">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              logo={project.logo}
              displayBoth={project.displayBoth}
              images={project.images}
              paras={project.paras}
              techs={project.techs}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
        <ContactBar />
      </div>
    </Element>
  );
};
