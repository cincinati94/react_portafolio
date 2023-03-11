import React from "react";
import Card from "../components/Card";
import Logo from "../components/Logo";

const cards = [
  { name: "HTML", logo: <Logo icon={"vscode-icons:file-type-html"} /> },
  { name: "CSS", logo: <Logo icon={"vscode-icons:file-type-css"} color={"orange"} /> },
  { name: "JavaScript", logo: <Logo icon={"logos:javascript"} /> },
  { name: "React", logo: <Logo icon={"logos:react"} /> },
  { name: "Redux", logo: <Logo icon={"logos:redux"} /> },
  { name: "JSON", logo: <Logo icon={"logos:json"} /> },
  { name: "SASS", logo: <Logo icon={"vscode-icons:file-type-sass"} /> },
  { name: "BEM", logo: <Logo icon={"logos:bem"} /> },
];
const Skills = () => {
  return (
    <div className="block-skills">
      <h3>Skills</h3>
      <div className="skills-container">
        {cards.map((card, index) => (
          <Card name={card.name} logo={card.logo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
