
import './project.scss'
import data from '../../data/data.json';
import Card from './Card';

function Project() {
  return (
    <section className='section-projects style' id='projects'>
      <div className="filter flex">
        <button className='active'>Tous les Projets</button>
        <button>Projets Formations </button>
        <button>Projets Personnels</button>
      </div>
    <article className="projects flex">
      {
        data && 
        data.length >0 &&
        data.map((card)=>
          { console.log(card?.title)
            return (<Card project={card} key={card?.id} />);})
      }
    </article>

      
      
    </section>
  )
}

export default Project