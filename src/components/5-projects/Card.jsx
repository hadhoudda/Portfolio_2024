import "./card.scss";


function Card({project}) {
  return (
    <figure className="card ">
      <img src="../src/images/mon-photo.webp" alt="" />
      <figcaption>
        <h2>{project?.title}</h2>
        <div className="description-project ">{project?.tags}</div>

        <div className="links flex">
          <div className="icon-link flex">
            <a href={project?.link}>
              <i className="fa-solid fa-link"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <a href="" className="flex info">
            Plus <i className="fa-solid fa-arrow-right"></i>
          </a>
          {/* <i className="fa-solid fa-circle-info"></i> */}
        </div>

      </figcaption>
    </figure>
  );
}

export default Card