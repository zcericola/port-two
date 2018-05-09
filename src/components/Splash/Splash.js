import React from 'react';
import Header from '../Header/Header';
import zenscroll from 'zenscroll';


const Splash = () => { 
        return(<div className = 'container' id = 'splash'>
           <Header />
           <div id = 'hero-container'>
           <h1 id = 'hero'>ZAC CERICOLA</h1>
           <p id = 'sub-hero'>Full Stack Web Developer</p>
           <a href = '#about'><i className="far fa-hand-point-down" id = 'down-arrow' ></i></a>
           </div>
        
        </div>);
    
}

export default Splash;