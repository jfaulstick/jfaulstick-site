import React from "react";

import { Element, Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import { ContactBar } from '../components/contact-bar';

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
        <div className="page--main-content"></div>
        <ContactBar />
      </div>
    </Element>
  );
};
