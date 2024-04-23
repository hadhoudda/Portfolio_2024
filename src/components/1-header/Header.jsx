import { useState } from "react";
import "./header.scss";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="style flex">
      <a className="link-logo" href="#">
        <img className="logo" src="./src/images/logo.png" alt="image__houda" />
      </a>
      <button className="btn-mode">
        <i className="fa-solid fa-sun icone-moon"></i>
        {/* <i className="fa-regular fa-moon icone-moon"></i> */}
      </button>
      <nav>
        <div className="nav-desktop">
          <ul className="flex">
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
        </div>
      </nav>

      <div
        onClick={() => {
          setToggleMenu(true);
        }}
      >
        <i  className={setToggleMenu ? "fa-solid fa-bars btn-menu": "div-none"}></i>
      </div>

      {toggleMenu && (
        <div className="nav-mobil">
          <ul className="modal">
            <li>
               <button onClick={() => { setToggleMenu(false)}}>
               <i className="fa-solid fa-xmark btn-menu "></i>
               </button>
              
            </li>
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
        </div>
      )}
    </header>
  );
}

export default Header;
