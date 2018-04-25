import React, {Component} from 'react';

class About extends Component {
    render(){
        return(<div className = 'container' id = 'about'>
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

        <div className = 'container'>
        <h2>I'm an analogue guy in a digital world.</h2>
        
        </div>        
        </div>);
    }
}

export default About;