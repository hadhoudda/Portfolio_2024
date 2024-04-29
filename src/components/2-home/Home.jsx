import "./home.scss";

function Home() {
  return (
    <section className="style home" id="home">
      <div className="section-left">
        <div className="image-profil flex">
          <img src="../src/images/mon-photo.webp" alt="photo profil de houda" />
          <i className="fa-solid fa-check icone-verified"></i>
        </div>
        <p>Hi, I&rsquo; Am <span id="name">HOUDA</span></p>
        <p>Développeuse full-stack Web & Mobile </p>

        <div className="link-social flex">
            <a href="mailto:ahhouda@yahoo.fr">
              <i className="fa-regular fa-envelope "></i>
            </a>
            <a href="https://www.linkedin.com/in/houda-ben-abdallah-developpeuse-web/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/hadhoudda">
              <i className="fa-brands fa-github "></i>
            </a>
            <a href="https://wa.me/+33622464454">
              <i className="fa-brands fa-whatsapp "></i>
            </a>
        </div>
        <button className="btn-cv flex">
          <a href="./cv.pdf" download>
            Télécharger mon CV
          </a>
        </button>
      </div>
      <div className="section-right flex"></div>
    </section>
  );
}

export default Home;
