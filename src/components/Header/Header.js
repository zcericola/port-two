import React, { Component } from "react";
const resume = require('../../assets/cericola_resume.pdf');

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

  //opens hidden mneu
  handleMenuClick() {
    const hamburger = document.getElementById("menu");
    const actualMenu = document.getElementById("mobile-drop-down");
    const logo = document.getElementById("logo");
    const hero = document.getElementById("hero");
    const subHero = document.getElementById("sub-hero");

    if (actualMenu.style.display !== "block") {
      logo.style.display = "none";
      hamburger.style.display = "none";
      actualMenu.style.display = "block";
      hero.style.visibility = "hidden";
      subHero.style.visibility = "hidden";
    } else {
      actualMenu.style.display = "block";
      logo.style.display = "flex";
      hamburger.style.display = "flex";
    }
  }
  //closes the hidden menu
  handleClose() {
    const hamburger = document.getElementById("menu");
    const actualMenu = document.getElementById("mobile-drop-down");
    const hero = document.getElementById("hero");
    const subHero = document.getElementById("sub-hero");
    const logo = document.getElementById("logo");

    hamburger.style.display = "flex";
    actualMenu.style.display = "none";
    logo.style.display = "flex";
    hero.style.visibility = "initial";
    subHero.style.visibility = "initial";
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
              <li className="hover">About</li>
            </a>
            <a href="#projects" onClick={() => this.handleClose()}>
              <li className="hover">Projects</li>
            </a>
            <a href={resume} target = '_blank' onClick={() => this.handleClose()}>
              <li className="hover">Résumé</li>
            </a>
            <a href="#contact" onClick={() => this.handleClose()}>
              <li className="hover">Contact</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
