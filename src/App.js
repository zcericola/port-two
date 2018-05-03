import React, { Component } from 'react';
import Splash from './components/Splash/Splash';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


const App = () => { 
    return (
      <div id="app">
        <Splash />
        <About />
        <Projects />
        <Contact />
        

      </div>
    );
  }


export default App;
