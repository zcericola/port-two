import React, {Component} from 'react';
import Header from '../Header/Header';


class Splash extends Component {
    constructor(){
        super();

    this.pullDown = this.pullDown.bind(this);
    }

    pullDown(){
        window.scroll({            
           left: 0,            
            top: 1022,
            behavior: 'smooth'        
        });

    }

    render(){
        return(<div className = 'container' id = 'splash'>
           <Header />
           <div id = 'hero-container'>
           <h1 id = 'hero'>ZAC CERICOLA</h1>
           <p id = 'sub-hero'>Full Stack Web Developer</p>
           <i className="far fa-hand-point-down" id = 'down-arrow' onClick = {() => {this.pullDown()}}></i>
           </div>
        
        </div>);
    }
}

export default Splash;