import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header className='style flex'>
      {/* <Link to='/Portfolio'><img className ="logo-profil" src={logo} alt='image__houda' /></Link> */}
      <nav>
        <ul className='flex'>
          <li><a href=" ">Accueil</a></li>
          <li><a href="">À propos</a></li>
          <li><a href="">Compétences</a></li>
          <li><a href="">Projets</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button>
        j
      </button>
    </header>
  )
}

export default Header