import React from "react";

import { Element, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

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

  componentDidMount() {
    this.timerID = setInterval(() => this.stepProject(-1), 3000);
  }

  stepProject(inc) {
    const length = this.state.projects.length;
    console.log(
      `${this.state.activeProject} + ${inc} = ${this.state.activeProject + inc}`
    );
    console.log(`length is ${length}`);

    if (this.state.activeProject + inc > length - 1) {
      this.setState({ activeProject: 0 });
    } else if (this.state.activeProject + inc < 0) {
      this.setState({ activeProject: length - 1 });
    } else {
      this.setState({ activeProject: this.state.activeProject + inc });
    }

    console.log(`set activeProject to ${this.state.activeProject}`);
    console.log(this.state);
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
          </div>
          <ContactBar />
        </div>
      </Element>
    );
  }
}

export default PortfolioPage;
