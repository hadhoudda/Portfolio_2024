import './profil.scss'

function Profil() {
  return (
    <section id='profil' className='style section-profil '>
         <h2 className="title">
      À propos de moi
      </h2>
      <div className="container-profil flex">
      <img className='img-profil' src="./src/images/pro3.jpg" alt="image houda de profil"/>
      <p className="text-profil">
      Hello 😊! Je m’appelle Houda, développeuse fullstack, Javascript, React, Node.Js, passionnée par le développement front-end et back-end,
       assoiffée de nouvelles connaissances, d'apprendre de nouvelles techniques curieuse, autonome et ayant l'esprit d’équipe..
      Je suis passionnée par le monde du développement depuis que je suis petite, j’ai fini mes études en école d’ingénieur 
      (Spécialité réseaux et télécoms en Tunis),et en 2023 j’ai fait formation développeur web 
      (diplôme RNCP niveau 5, bac+2) avec Openclassrooms et je souhaite approfondir mes compétences en Java au sein d'une entreprise.
       N'hésitez pas à me contacter pour on savoir plus sur mon parcours et mes projets.

      </p>
      </div>
     
    </section>
  )
}

export default Profil;