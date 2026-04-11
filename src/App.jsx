import AnimatedBackground from './components/Background/AnimatedBackground.jsx'
import Home from './components/Home/Home.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Education from './components/Education/Education.jsx'
import Courses from './components/Courses/Courses.jsx'
import Services from './components/Services/Services.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Skills from './components/Skills/Skills.jsx'
import SoftSkills from './components/SoftSkills/SoftSkills.jsx'

function App() {

  return (
    <>
      <AnimatedBackground />
      <div className="app-main">
        <Home />
        <Nav />
        <About />
        <Education />
        <Courses />
        <Skills />
        <SoftSkills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
