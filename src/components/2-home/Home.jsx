import { useEffect } from "react";
import "./home.scss";
import { useState } from "react";

function Home() {
  const [showBtnScroll, setshowBtnScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1)
        setshowBtnScroll(true);
      else setshowBtnScroll(false);
    });
  }, []);

  return (
    <>
      <section className="style home flex" id="home">
        <div className="section-home">
          <h1>
            Hi, I&rsquo; Am <span id="my-name">HOUDA</span>
          </h1>
          <h2>Développeuse full-stack Web & Mobile </h2>

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
          <button className="btn-cv ">
            <a href="./cv.pdf" download>
              Télécharger mon CV
            </a>
          </button>
        </div>
        
      
          <a style={{opacity: showBtnScroll? 1 : 0}} href="#up" className="btn-scroll-top flex">
            <i className="fa-solid fa-chevron-up"></i>
          </a>
      
      </section>
    </>
  );
}

export default Home;
