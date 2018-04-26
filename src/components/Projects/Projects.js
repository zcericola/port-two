import React, {Component} from 'react';
const artifact = require('../../assets/artifact.png');
const casa = require('../../assets/casa.png');
const book = require('../../assets/bookspy.png');

class Projects extends Component {
    render(){
        return(<div id = 'projects' className = 'container'>        
        <h1 className = 'title'>Projects</h1>
        <div className = 'cards'>
        <div className = 'card'><img src = {artifact} alt = 'Artifact Fine Goods'/></div>
        <div className = 'card'><img src = {casa} alt = 'Casa Connection'/></div>
        <div className = 'card'><img src = {book} alt = 'Book Spy'/></div>
        {/* <div className = 'card' id = 'more'><span>More Coming Soon!</span></div> */}
        </div>              
        </div>);
    }
}

export default Projects;