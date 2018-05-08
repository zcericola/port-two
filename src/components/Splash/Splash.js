import React, {Component} from 'react';
import Header from '../Header/Header';
import zenscroll from 'zenscroll';


class Splash extends Component {
    constructor(){
        super();

    }

   

    render(){
        return(<div className = 'container' id = 'splash'>
           <Header />
           <div id = 'hero-container'>
           <h1 id = 'hero'>ZAC CERICOLA</h1>
           <p id = 'sub-hero'>Full Stack Web Developer</p>
           <a href = '#about'><i className="far fa-hand-point-down" id = 'down-arrow' ></i></a>
           </div>
        
        </div>);
    }
}

export default Splash;