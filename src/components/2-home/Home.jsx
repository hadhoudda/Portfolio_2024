import { useEffect } from "react";
import "./home.scss";
import { useState } from "react";

function Home() {
  const [showBtnScroll, setshowBtnScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
      if (window.scrollY > 1)
        setshowBtnScroll(true);
      else setshowBtnScroll(false);
    });
  }, []);

  return (
    <>
      <section className="style home" id="home">
        <div className="section-left">
          <div className="image-profil flex">
            <img
              src="../src/images/mon-photo.webp"
              alt="photo profil de houda"
            />
            <i className="fa-solid fa-check icone-verified"></i>
          </div>
          <p>
            Hi, I&rsquo; Am <span id="name">HOUDA</span>
          </p>
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
      
          <a style={{opacity: showBtnScroll? 1 : 0}} href="#up" className="btn-scroll-top flex">
            <i className="fa-solid fa-chevron-up"></i>
          </a>
      
      </section>
    </>
  );
}

export default Home;
