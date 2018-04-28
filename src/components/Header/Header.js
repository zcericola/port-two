import React, {Component} from 'react';


class Header extends Component {
    constructor(){
        super();
        this.state = {
            openMenu: false

        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleMenuClick(){
        const hamburger = document.getElementById('menu');
        const actualMenu = document.getElementById('mobile-drop-down');
        const logo = document.getElementById('logo');
        if(actualMenu.style.display === 'none'){
            actualMenu.style.display = 'block';
            logo.style.display = 'none';
            hamburger.style.display = 'none';
        }
        else {
            actualMenu.style.display = 'none'
            logo.style.display = 'flex';
            hamburger.style.display = 'flex';
        }
        

    }

    handleClose(){      
        const hamburger = document.getElementById('menu');
        const actualMenu = document.getElementById('mobile-drop-down');
        const logo = document.getElementById('logo');
        actualMenu.style.display = 'none';
        logo.style.display = 'flex';
        hamburger.style.display = 'flex';

        
    }

    render(){
        return(<div className = 'container' id = 'header'>
        <div id = 'logo'>
        <span id = 'z-logo'>Z</span>
        <i className="far fa-moon" id = 'moon'></i>
        </div>
        <i className="fas fa-bars" id = 'menu' aria-hidden= 'true' onClick = {() => this.handleMenuClick()}></i>
        <div id = 'mobile-drop-down'>
        <i className="fas fa-times" id = 'close-btn' onClick = {() => this.handleClose()}></i>
        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        </div>
        </div>
        );
    }


}

export default Header;
