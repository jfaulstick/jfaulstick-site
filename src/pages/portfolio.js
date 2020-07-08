import React from "react";

import { SkillGroup } from "../components/skill-group/skill-group";

export const PortfolioPage = () => {
  return (
    <div className="page page--portfolio" id="portfolio-page">
      <SkillGroup title="Front-End Technologies" skills={['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'React', 'AngularJS', 'Angular 8', 'GatsbyJS']} />
      <SkillGroup title="Back-End Technologies" skills={['Node', 'Express', 'REST APIs', 'MySQL', 'MongoDB']} />
      <SkillGroup title="Other Skills" skills={['Jasmine', 'Karma', 'Jest', 'Git', 'Agile Development']} />
    </div>
  );
};
