import React, {Component} from 'react';


class Header extends Component {

    render(){
        return(<div className = 'container' id = 'header'>
        <div id = 'logo'>
        <span id = 'z-logo'>Z</span>
        <i className="far fa-moon" id = 'moon'></i>
        </div>
        {/* <span className = 'btn'>MENU</span>        */}
        <i className="fas fa-bars" id = 'menu' aria-hidden= 'true'></i>
        </div>
        );
    }


}

export default Header;
