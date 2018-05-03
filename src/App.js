import React, { Component } from 'react';
import Splash from './components/Splash/Splash';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


class App extends Component { 
    
  render(){
  return (
      <div id="app">
        <Splash />
        <About />
        <Projects />
        <Contact />
        <Footer />
        
      </div>
    );
  }
}  


export default App;
