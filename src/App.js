import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Projects from './Component/Project';
import { InfiniteCards } from './Component/Achievement';
import Footer from './Component/Footer';
import ProfessionalExperience from './Component/ProfessionalExperience';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <ProfessionalExperience/>
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <InfiniteCards />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
