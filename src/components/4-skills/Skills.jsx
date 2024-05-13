import React from "react";
import technoData from "../../data/techno.json";
import outilData from "../../data/outils.json";
import Skill from "./Skill";
import "./skills.scss";

function Skills() {
  return (
    <section id="skills" className="style section-skills flex">
      <h2 className="title-techno title">Mes technos</h2>
      <div className="skills-technos flex">
        {technoData &&
          technoData.length > 0 &&
          technoData.map((techno) => {
            return <Skill skill={techno} key={techno?.id} />;
          })}
      </div>
      <h2 className="title-outils title">Mes outils</h2>
      <div className="skills-outils flex">
        {outilData &&
          outilData.length > 0 &&
          outilData.map((outil) => {
            return <Skill skill={outil} key={outil?.id} />;
          })}
      </div>
    </section>
  );
}

export default Skills;
