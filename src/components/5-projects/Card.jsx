import "./card.scss";
// import Tag from './Tag'

function Card({project}) {
  return (
    <figure className="card ">
      <img src={project?.picture} alt={"l'image de la projet" + project?.title} />
      <figcaption>
        <h2>{project?.title}</h2>
        {/* <div className="description-project flex">
                {project?.tags?.map((tag, index) => {
                    return <Tag value={tag} key={index} />;
                })}
        </div> */}

        <div className="links-project">
          <div className="icon-link flex">
            <a href={project?.link}>
              <i className="fa-solid fa-link"></i>
            </a>
            <a href={project?.titleLink}>
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="" className="flex info">
            Plus info <i className="fa-solid fa-arrow-right"></i>
          </a>
          {/* <i className="fa-solid fa-circle-info"></i> */}
        </div>

      </figcaption>
    </figure>
  );
}

export default Card