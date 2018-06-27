import React from 'react';
const artifact = require('../../assets/artifact.png');
const casa = require('../../assets/casa.png');
const book = require('../../assets/bookspy.png');

const Projects = () => {
    
        return(<div id = 'projects' className = 'container'>        
        <h1 className = 'title'>Projects</h1>
        <div className = 'cards'>
        <div className = 'card'>
        <img className = 'project-images' src = {artifact} alt = 'Artifact Fine Goods'/>
        <div className = 'hover-desc'>
        <h2>Artifact Fine Goods</h2>
        <p><span className = 'tab2'></span>A fully functioning fictional e-commerce website built in a 2 week sprint. Allows a customer to browse products, add them to the shopping cart, checkout, and edit profile details. Tech used: React, Redux, Auth0, Stripe, SweetAlert2, PostgreSQL, Express, Node, and Sass.</p>
        <span className = 'github-link'><a href = 'https://github.com/zcericola/artifact-project' target = '#'>Github <i className="fa fa-code" aria-hidden="true"></i></a></span>        
        </div>
        </div>
        <div className = 'card'><img className = 'project-images' src = {casa} alt = 'Casa Connection'/>
        <div className = 'hover-desc'><h2>Casa Connection</h2><p><span className = 'tab2'></span>A property management app allowing landlords to track properties, tenants, contractors and maintenance. This was built with a team of 3 other developers over 2 weeks. I was responsible for building the backend logic, data visualization with Chart.js, and overall project management. Tech used: React, Redux, Express, Node, Auth0, PostgreSQL, Chart.js, Sass, and Material-UI.</p>
        <span className = 'github-link'><a href = 'https://github.com/rental-management/Casa-Connection' target = '#'>Github <i className="fa fa-code" aria-hidden="true"></i></a></span></div>
        </div>
        <div className = 'card'><img className = 'project-images' src = {book} alt = 'Book Spy'/>
        <div className = 'hover-desc'><h2>Book Spy</h2><p><span className = 'tab2'></span>A book search application that pulls information from the goodreads.com API. Users can search for books, keep track of favorite books, and delete from their favorites. Building this helped improve my understanding of making RESTful HTTP requests to an external API. Tech used: React, Node, and Express.</p>
        <span className = 'github-link'><a href = 'https://github.com/zcericola/artifact-project' target = '#'>Github <i className="fa fa-code" aria-hidden="true"></i></a></span></div>
        </div>
        {/* <div className = 'card' id = 'more'><span>More Coming Soon!</span></div> */}
        </div>              
        </div>);
    
}

export default Projects;