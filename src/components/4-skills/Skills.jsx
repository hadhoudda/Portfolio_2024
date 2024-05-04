import React from "react";
import "./skills.scss";

function Skills() {
  return (
    <section id="skills" className="style section-skills flex">
      <h2 className="title-techno title">Mes technos</h2>
      <div className="skills-technos flex">
        <div className="skill flex">
          <i className="devicon-html5-plain colored"></i>
          <p className="text-skil">Html5</p>
        </div>
        <div className="skill flex">
          <i className="devicon-css3-plain colored"></i>
          <p className="text-skil">Css3</p>
        </div>
        <div className="skill flex">
          <i className="devicon-sass-original colored"></i>
          <p className="text-skil">Sass</p>
        </div>
        <div className="skill flex">
          <i className="devicon-bootstrap-plain colored"></i>
          <p className="text-skil">Bootstrap</p>
        </div>
        <div className="skill flex">
          <i className="devicon-javascript-plain colored"></i>
          <p className="text-skil">JavaScript</p>
        </div>
        <div className="skill flex">
          <i className="devicon-react-original colored"></i>
          <p className="text-skil">React</p>
        </div>
        <div className="skill flex">
          <i className="devicon-java-plain colored"></i>
          <p className="text-skil">Java</p>
        </div>
        <div className="skill flex">
          <i className="devicon-spring-original colored"></i>
          <p className="text-skil">Spring</p>
        </div>
        <div className="skill flex">
          <i className="devicon-azuresqldatabase-plain colored"></i>
          <p className="text-skil">SQL</p>
        </div>
        <div className="skill flex">
          <i className="devicon-mysql-original colored"></i>
          <p className="text-skil">MySql</p>
        </div>
      </div>
      <h2 className="title-outils title">Mes outils</h2>
      <div className="skills-outils flex">
        <div className="skill flex">
          <i className="devicon-vscode-plain colored"></i>
          <p className="text-skil">Vscode</p>
        </div>
        <div className="skill flex">
          <i className="devicon-eclipse-plain colored"></i>
          <p className="text-skil">Eclipse</p>
        </div>
        <div className="skill flex">
          <i className="devicon-postman-plain colored"></i>
          <p className="text-skil">Postman</p>
        </div>
        <div className="skill flex">
          <i className="devicon-figma-plain colored"></i>
          <p className="text-skil">Figma</p>
        </div>
        <div className="skill flex">
          <i className="devicon-trello-plain colored"></i>
          <p className="text-skil">Trello</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
