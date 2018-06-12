import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormValidation = this.handleFormValidation.bind(this);
  }

  handleClick() {
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  }

  handleFormValidation() {
    let name = document.forms["contact-form"]["usrName"].value;
    let email = document.forms["contact-form"]["usrEmail"].value;
    let message = document.forms["contact-form"]["usrMessage"].value;
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === "" || email === "" || message === "") {
      Swal({
        type: "error",
        text: "All fields are required. Please fill them out and try again.",
        background: "#fdfdfd",
        confirmButtonColor: "#216578",
        allowEnterKey: true
      });
      return false;
    }
    if(!emailRegEx.test(email)){
      Swal({
        type: "error",
        text: "Please enter a valid email address. Ex: name@email.com.",
        background: "#fdfdfd",
        confirmButtonColor: "#216578",
        allowEnterKey: true
      });
      return false;
    }
    return true;
  }

  handleSubmit() {
    const { name, email, message } = this.state;
    const validated = this.handleFormValidation();
    validated
      ? axios.post("/contact", { name, email, message }).then(response => {
          document.querySelector("form").reset();
          Swal({
            type: "success",
            title: "Thanks for reaching out!",
            text: "I'll be in touch soon.",
            background: "#fdfdfd",
            confirmButtonColor: "#216578",
            allowEnterKey: true
          });
        })
      : null;
  }

  render() {
    return (
      <div className="container" id="contact">
        <h1 className="title" id="contact-title">
          Contact
        </h1>
        <h3 className="sub-title">
          If you want to get in touch with me please shoot me an email with the
          form below.
        </h3>
        <form method="post" name="contact-form">
          <fieldset className="contact-form">
            <label>Name: </label>
            <input
              className="contact-input"
              type="text"
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
              required
              autoComplete="on"
              name="usrName"
            />
            <label>Email: </label>
            <input
              className="contact-input"
              type="email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              required
              autoComplete="on"
              name="usrEmail"
            />
            <label>Message: </label>
            <textarea
              type="text"
              rows="4"
              onChange={e => {
                this.setState({ message: e.target.value });
              }}
              required
              autoComplete="on"
              name="usrMessage"
            />
          </fieldset>
          <span
            className="btn"
            onClick={() => {
              this.handleSubmit();
            }}
            value="submit"
          >
            Send
          </span>
        </form>
{/* <a href = 'https://www.github.com/zcericola' target= '_blank'><h3 className = 'sub-title'>Github</h3></a>
<a href = 'https://www.linkedin.com/in/zcericola/' target= '_blank'><h3 className = 'sub-title'>LinkedIn</h3></a>
<a href = 'mailto:zcericola@gmail.com'> <h3 className = 'sub-title'>Email</h3></a> */}

        <i
          className="fa fa-arrow-circle-up"
          aria-hidden="false"
          id="scroll-top"
          onClick={() => {
            this.handleClick();
          }}
        />
      </div>
    );
  }
}

export default Contact;
