import React, {Component} from 'react';

class About extends Component {
    render(){
        return(<div className = 'container' id = 'about'>
        <h1 className = 'title' id = 'about-start'>About</h1>
        <div className = 'cards'>
        <div className = 'card'>        
        <i className="fas fa-map-marker"></i>
        <h3>Currently in Dallas, TX</h3> 
        </div>

        <div className = 'card'>        
        <i className="fas fa-graduation-cap"></i>
        <h3>Always Learning</h3>
        </div>

        <div className = 'card'>        
        <i className="fas fa-plane"></i>
        <h3>Always Exploring</h3>
            </div> 
        </div>

        <div id = 'text-bg-container'>
        <section>       
        <p className = 'about-text'><span className = 'tab'></span>I'm a developer focused on creating mobile-first websites that tell a story while being easy to navigate. I enjoy the logic and organization of building out a server as well as the foundations of good design that make a website pleasing to look at.</p>
        <p className = 'about-text'><span className = 'tab'></span>Lately, I've been using the SERN stack -- PostgreSQL, Express, React, and Node. I'm also learning Python and flask. In my free time, I enjoy reading, playing guitar, and collecting fountain pens.</p>
        </section>
        </div>
             
        </div>);
    }
}

export default About;