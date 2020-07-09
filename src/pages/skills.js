import React from "react";

import { Element, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { SkillGroup } from "../components/skill-group";

export const SkillsPage = () => {
  return (
    <Element name="skills" id="skills-section">
      <div className="page page--skills bg-gradiant" id="skills-page">
        <div className="chevron-up--container">
          <Link to="about" smooth={true}>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="chevron chevron-white"
            />
          </Link>
        </div>
        <div className="page--main-content page--skill-content">
          <SkillGroup
            title="Front-End Technologies"
            skills={[
              "HTML",
              "CSS",
              "Sass",
              "JavaScript",
              "TypeScript",
              "jQuery",
              "React",
              "AngularJS",
              "Angular 8",
              "GatsbyJS",
            ]}
          />
          <SkillGroup
            title="Back-End Technologies"
            skills={["Node", "Express", "REST APIs", "MySQL", "MongoDB"]}
          />
          <SkillGroup
            title="Other Skills"
            skills={["Jasmine", "Karma", "Jest", "Git", "Agile Development"]}
          />
        </div>
        <div className="chevron-down--container">
          <Link to="contact" smooth={true}>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="chevron chevron-white"
            />
          </Link>
        </div>
      </div>
    </Element>
  );
};
