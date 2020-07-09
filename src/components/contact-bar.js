import React from "react";

import { Element, Link } from "react-scroll";
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
        <a href="https://www.linkedin.com/in/joseph-faulstick/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a href="https://github.com/jfaulstick/" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a href="https://www.twitter.com/joefaulstick/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="mailto://jfaulstick@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </a>
      </div>
    </Element>
  );
};
