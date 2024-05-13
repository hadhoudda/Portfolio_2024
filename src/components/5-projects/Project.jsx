import React ,{ useState } from "react";
import data from "../../data/data.json";
import Card from "./Card";
import "./project.scss";

function Project() {
  const [classActive, setclassActive] = useState("all");
  const [dataFilter, setdataFilter] = useState(data);
  const handleClick = (parms) => {
    setclassActive(parms);
    const newData = data.filter((item) => {
      const categorys = item.category.find((categor) => {
        return categor === parms;
      });
      return categorys === parms;
    });
    setdataFilter(newData);
  };

  return (
    <section className="section-projects style flex" id="projects">
      <h2 className="title">Projets</h2>
      <div className="filter flex">
        <button
          onClick={() => {
            handleClick("all");
          }}
          className={classActive === "all" ? "active" : null}
        >
          Tous les Projets
        </button>
        <button
          onClick={() => {
            handleClick("formation");
          }}
          className={classActive === "formation" ? "active" : null}
        >
          Projets Formations{" "}
        </button>
        <button
          onClick={() => {
            handleClick("personel");
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
