import React, {Component} from 'react';
import Header from '../Header/Header';


class Splash extends Component {
    render(){
        return(<div className = 'container' id = 'splash'>
           <Header />
           <div id = 'hero-container'>
           <h1 id = 'hero'>ZAC CERICOLA</h1>
           <p id = 'sub-hero'>Full Stack Web Developer</p>
           </div>
        
        </div>);
    }
}

export default Splash;