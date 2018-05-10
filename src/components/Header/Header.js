import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const hamburger = document.getElementById("menu");
    hamburger.focus();
  }

  handleMenuClick() {
    const hamburger = document.getElementById("menu");
    const actualMenu = document.getElementById("mobile-drop-down");
    const logo = document.getElementById("logo");

    if (actualMenu.style.display !== "block") {
      logo.style.display = "none";
      hamburger.style.display = "none";
      actualMenu.style.display = "block";
   
    } else {
      actualMenu.style.display = "none";
      logo.style.display = "flex";
      hamburger.style.display = "flex";
    }
  }

  handleClose() {
    const hamburger = document.getElementById("menu");
    const actualMenu = document.getElementById("mobile-drop-down");
    const logo = document.getElementById("logo");
    actualMenu.style.display = "none";
    logo.style.display = "flex";
    hamburger.style.display = "flex";
  }

  render() {
    return (
      <div className="container" id="header">
        <div id="logo">
          <span id="z-logo">Z</span>
          <i className="far fa-moon" id="moon" />
        </div>
        <i
          className="fas fa-bars"
          id="menu"
          aria-hidden="false"
          autoFocus
          onClick={() => this.handleMenuClick()}
        />
        <div id="mobile-drop-down">
          <i
            className="fas fa-times"
            id="close-btn"
            onClick={() => this.handleClose()}
          />
          <ul>
            <a href="#about" onClick={() => this.handleClose()}>
              <li className = 'hover'>About</li>
            </a>
            <a href="#projects" onClick={() => this.handleClose()}>
              <li className = 'hover'>Projects</li>
            </a>
            <a href="#contact" onClick={() => this.handleClose()}>
              <li className = 'hover'>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
