import React from "react";

import { Element, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { ContactBar } from "../components/contact-bar";
import { ProjectCard } from "../components/project-card";

import { projects } from "../db/projects";

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: projects || [],
      activeProject: 0,
    };
  }

  stepProject(inc) {
    const length = this.state.projects.length;

    if (this.state.activeProject + inc > length - 1) {
      this.setState({ activeProject: 0 });
    } else if (this.state.activeProject + inc < 0) {
      this.setState({ activeProject: length - 1 });
    } else {
      this.setState({ activeProject: this.state.activeProject + inc });
    }
  }

  incrementProject = () => {
    this.stepProject(1);
  }

  decrementProject = () => {
    this.stepProject(-1);
  }

  render() {
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
            <div>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className="chevron chevron-primary"
                onClick={this.decrementProject}
              />
            </div>
            <ProjectCard
              title={this.state.projects[this.state.activeProject].title}
              logo={this.state.projects[this.state.activeProject].logo}
              displayBoth={
                this.state.projects[this.state.activeProject].displayBoth
              }
              images={this.state.projects[this.state.activeProject].images}
              paras={this.state.projects[this.state.activeProject].paras}
              techs={this.state.projects[this.state.activeProject].techs}
              github={this.state.projects[this.state.activeProject].github}
              demo={this.state.projects[this.state.activeProject].demo}
              key={this.state.projects[this.state.activeProject].title}
            />
            <div>
            <FontAwesomeIcon
                icon={faChevronRight}
                className="chevron chevron-primary"
                onClick={this.incrementProject}
              />
            </div>
          </div>
          <ContactBar />
        </div>
      </Element>
    );
  }
}

export default PortfolioPage;
