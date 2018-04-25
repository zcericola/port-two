import React, { Component } from 'react';
import Splash from './components/Splash/Splash';
import About from './components/About/About';


class App extends Component {
  render() {
    return (
      <div id="app">
        <Splash />
        <About />

      </div>
    );
  }
}

export default App;
