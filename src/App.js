import { Navbar } from './components/navbar';
import { Hero } from './sections/hero'
import './App.css';
import React from 'react';
import { About } from './sections/about';
import { Scrollbar } from 'react-scrollbars-custom';
import { Skills } from './sections/skills';
import { Experience } from './sections/experience';
import { Projects } from './sections/projects';
import { Contact } from './sections/contact';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
