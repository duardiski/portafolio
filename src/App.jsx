import Presentation from "./components/Presentation"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Example1 from "./components/Example1"

function App() {
  return (
    <div>
      <Example1 />
      <NavBar/>
      <About/>
      <Projects/>
      <Education />
      <Contact /> 
    </div>
  )
}

export default App
