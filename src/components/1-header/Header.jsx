import { useState } from "react";
import "./header.scss";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header className="style flex">
      <a className="link-logo" href="#">
        <img className="logo" src="./src/images/logo.png" alt="image__houda" />
      </a>
      <nav className={toggleMenu ? "nav-desktop" : "nav-mobil"}>
        <ul className={toggleMenu ? "flex" : "modal"}>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">À propos</a>
          </li>
          <li>
            <a href="#">Compétences</a>
          </li>
          <li>
            <a href="#">Projets</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div onClick={toggleNav}>
          <i
            className={
              toggleMenu ? "fa-solid fa-bars btn-menu" : "fa-solid fa-xmark btn-menu "
            }
          ></i>
        </div>
      </nav>

      <button className="btn-mode">
        <i className="fa-solid fa-sun icone-moon"></i>
        {/* <i className="fa-regular fa-moon icone-moon"></i> */}
      </button>
    </header>
  );
}

export default Header;
