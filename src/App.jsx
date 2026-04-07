import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Ecosystems from './components/Ecosystems';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechEraPage from './pages/TechEraPage';
import GraphEraPage from './pages/GraphEraPage';

const Home = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Ecosystems />
    <Skills />
    <Education />
    <Contact />
  </>
);

function App() {
  return (
    <div className="bg-brand-darker text-white min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techera" element={<TechEraPage />} />
          <Route path="/graphera" element={<GraphEraPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
