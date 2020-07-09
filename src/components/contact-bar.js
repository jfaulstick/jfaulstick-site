import React from "react";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const ContactBar = () => {
  return (
    <Element name="contact">
      <div className="chevron-down--container">
        <div className="social-icon--container">
          <a
            href="https://www.linkedin.com/in/joseph-faulstick/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://github.com/jfaulstick/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="https://www.twitter.com/joefaulstick/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="mailto://jfaulstick@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </div>

        <div className="copyright--container">
          &copy; Copyright 2020, Joseph Faulstick
        </div>
      </div>
    </Element>
  );
};
