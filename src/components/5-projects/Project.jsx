import "./project.scss";
import data from "../../data/data.json";
import Card from "./Card";
import { useState } from "react";

function Project() {
  const [classActive, setclassActive] = useState("all");
  const [dataFilter, setdataFilter] = useState(data);

  return (
    <section className="section-projects style flex" id="projects">
      <h2 className="title">Projets</h2>
      <div className="filter flex">
        <button
          onClick={() => {
            setclassActive("all");
            const newData = data;
            setdataFilter(newData);
          }}
          className={classActive === "all" ? "active" : null}
        >
          Tous les Projets
        </button>
        <button
          onClick={() => {
            setclassActive("formation");
            const newData = data.filter((item)=>{
              return item.category === "formation"
            })
            setdataFilter(newData);
          }}
          className={classActive === "formation" ? "active" : null}
        >
          Projets Formations{" "}
        </button>
        <button
          onClick={() => {
            setclassActive("personel");
            const newData = data.filter((item)=>{
              return item.category === "personel"
            })
            setdataFilter(newData);
          }}
          className={classActive === "personel" ? "active" : null}
        >
          Projets Personnels
        </button>
      </div>
      <article className="projects flex">
        {dataFilter &&
          dataFilter.length > 0 &&
          dataFilter.map((card) => {
            return <Card project={card} key={card?.id} />;
          })}
      </article>
    </section>
  );
}

export default Project;
