import { useState } from "react";
import "./card.scss";
import Tag from "./Tag";

function Card({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <figure className="card ">
        <img
          src={project?.picture}
          alt={"l'image de la projet" + project?.title}
        />
        <figcaption>
          <h2>{project?.title}</h2>
          <div className="links-project">
            <div className="icon-link flex">
              <a href={project?.link}>
                <i className="fa-solid fa-link"></i>
              </a>
              <a href={project?.titleLink}>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="flex info"
            >
              Plus info <i className="fa-solid fa-arrow-right"></i>
            </button>
            {/* <i className="fa-solid fa-circle-info"></i> */}
          </div>
        </figcaption>
      </figure>
      {showModal && (
        <div className={setShowModal ? "show-modal" : "no-show-modal"}>
          <div className="modal">
            <button className="close-modal flex"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="description-project">
              <h3 className="title-modal">{project?.title}</h3>
              <div className="body-modal">{project?.description}</div>
              <div className="footer-modal flex">
                {project?.tags?.map((tag, index) => {
                  return <Tag value={tag} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
