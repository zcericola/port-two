import React, {Component} from 'react';
const artifact = require('../../assets/artifact.png');
const casa = require('../../assets/casa.png');
const book = require('../../assets/bookspy.png');

class Projects extends Component {
    render(){
        return(<div id = 'projects' className = 'container'>        
        <h1 className = 'title'>Projects</h1>
        <div className = 'cards'>
        <div className = 'card'>
        <img className = 'project-images' src = {artifact} alt = 'Artifact Fine Goods'/>
        <div className = 'hover-desc'>
        <h2>Artifact Fine Goods</h2>
        <p>A fully functioning fictional e-commerce website built in a 2 week sprint. Allows a customer browse products, add them to the shopping cart, checkout, and edit profile details. Tech used includes React, Redux, PostgreSQL for database management, Express, Node, and Sass.</p>
        <span className = 'github-link'><a href = 'https://github.com/zcericola/artifact-project' target = '#'>Github <i class="fa fa-code" aria-hidden="true"></i></a></span>        
        </div>
        </div>
        <div className = 'card'><img className = 'project-images' src = {casa} alt = 'Casa Connection'/>
        <div className = 'hover-desc'><h2>Casa Connection</h2><p>A fully functioning fictional e-commerce website built in a 2 week sprint. Allows a customer browse products, add them to the shopping cart, checkout, and edit profile details. Tech used includes React, Redux, PostgreSQL for database management, Express, Node, and Sass.</p>
        <span className = 'github-link'><a href = 'https://github.com/rental-management/Casa-Connection' target = '#'>Github <i class="fa fa-code" aria-hidden="true"></i></a></span></div>
        </div>
        <div className = 'card'><img className = 'project-images' src = {book} alt = 'Book Spy'/>
        <div className = 'hover-desc'><h2>Book Spy</h2><p>A fully functioning fictional e-commerce website built in a 2 week sprint. Allows a customer browse products, add them to the shopping cart, checkout, and edit profile details. Tech used includes React, Redux, PostgreSQL for database management, Express, Node, and Sass.</p>
        <span className = 'github-link'><a href = 'https://github.com/zcericola/artifact-project' target = '#'>Github <i class="fa fa-code" aria-hidden="true"></i></a></span></div>
        </div>
        {/* <div className = 'card' id = 'more'><span>More Coming Soon!</span></div> */}
        </div>              
        </div>);
    }
}

export default Projects;