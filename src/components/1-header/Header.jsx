import './header.scss';

function Header() {
  return (
    <header className='style flex'>
      <a href="#"><img className ="logo" src="./src/images/logo.png" alt='image__houda' /></a>
      <nav>
        <ul className='flex'>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Compétences</a></li>
          <li><a href="#">Projets</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button>
        <i className="fa-solid fa-sun icone-moon"></i>
      {/* <i className="fa-regular fa-moon icone-moon"></i> */}
      </button>
    </header>
  )
}

export default Header