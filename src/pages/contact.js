import React from "react";

import { Element, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ContactPage = () => {
  return (
    <Element name="contact">
      <div className="page page--contact" id="contact-page">
        <div className="chevron-up--container">
          <Link to="skills" smooth={true}>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="chevron chevron-primary"
            />
          </Link>
        </div>
        <div className="page--main-content page--contact-content"></div>
      </div>
    </Element>
  );
};
