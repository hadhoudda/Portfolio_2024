import React from "react";

export default function Skill({ skill }) {
  return (
    <div className="skill flex">
      <i className={skill?.icone}></i>
      <p className="text-skil"> {skill?.title}</p>
    </div>
  );
}
