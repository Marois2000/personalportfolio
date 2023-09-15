import { Navbar } from './components/navbar';
import { Hero } from './sections/hero'
import './App.css';
import React from 'react';
import { About } from './sections/about';
import { Scrollbar } from 'react-scrollbars-custom';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
    </div>
  );
}

export default App;
