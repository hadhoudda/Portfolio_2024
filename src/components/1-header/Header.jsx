import { useState } from "react";
import "./header.scss";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <header className="style flex">
      <button className="btn-mode">
        {/* <i className="fa-regular fa-sun icone-sun flex"></i> */}
        <i className="fa-regular fa-moon icone-moon flex "></i>
      </button>
      <nav>
        <div className="nav-desktop">
          <ul className="flex">
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#profil">Profil</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        onClick={() => {
          setToggleMenu(true);
        }}
      >
        <i  className="fa-solid fa-bars btn-menu"></i>
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
              <a onClick={() => { setToggleMenu(false)}} href="#home">Accueil</a>
            </li>
            <li>
              <a onClick={() => { setToggleMenu(false)}} href="#profil">À propos</a>
            </li>
            <li>
              <a onClick={() => { setToggleMenu(false)}} href="#skills">Compétences</a>
            </li>
            <li>
              <a onClick={() => { setToggleMenu(false)}} href="#projects">Projets</a>
            </li>
            <li>
              <a onClick={() => { setToggleMenu(false)}} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
