import React from "react";

export const SkillGroup = (props) => {
  const skills = props.skills.map((skill) => <li className='skill-group--item' key={skill}>{skill}</li>)

  return (
    <div className="skill-group--container">
      <div className="skill-group--title">
        {props.title || "Skill Group Title"}
      </div>
      <ul>
        {skills}
      </ul>
    </div>
  );
};
