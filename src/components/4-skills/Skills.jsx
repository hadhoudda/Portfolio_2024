import React from "react";
import "./skills.scss";

function Skills() {
  return (
    <section id="skills" className="style section-skills flex">
      <h2 className="title-techno title">
      Mes technos
      </h2>
      <div className="skills-technos flex">
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-sass-original colored"></i>
        <i className="devicon-bootstrap-plain colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-java-plain colored"></i>
        <i className="devicon-spring-original colored"></i>
        <i className="devicon-azuresqldatabase-plain colored"></i>
        <i className="devicon-mysql-original colored"></i>
          
      </div>
      <h2 className="title-outils title">
      Mes outils
      </h2>
      <div className="skills-outils flex">
        <i className="devicon-vscode-plain colored"></i>
        <i className="devicon-eclipse-plain colored"></i>
        <i className="devicon-postman-plain colored"></i>
        <i className="devicon-figma-plain colored"></i>
        <i className="devicon-trello-plain colored"></i>
      </div>
    </section>
  );
}

export default Skills;
