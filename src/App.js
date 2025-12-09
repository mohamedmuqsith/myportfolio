import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App bg-dark min-h-screen text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
