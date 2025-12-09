import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Intro from './components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Optional: Hide scrollbar during intro
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showIntro]);

  return (
    <>
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
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
      )}
    </>
  );
}

export default App;
