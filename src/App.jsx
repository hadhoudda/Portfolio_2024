import Header from "./components/1-header/Header";
import Home from "./components/2-home/Home";
import About from "./components/3-about/About";
import Skills from "./components/4-skills/Skills";
import Project from "./components/5-projects/Project";
import Contact from "./components/6-contact/Contact";
import Footer from "./components/7-footer/Footer";

function App() {
  return (
    <div className="container" >
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </main>
      
      <Footer/>
     
    </div>
  )
}

export default App
