import React, {Component} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

class Contact extends Component {
    constructor(){
        super();

        this.state = {
            name:'',
            email: '',
            message: ''
        }
      
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 

    handleClick(){
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'

        })

    }

    handleSubmit(){
        const {name, email, message} = this.state;
        axios.post('/contact', {name, email, message}).then( (response) => {
            document.querySelector('form').reset();
            Swal({
                type: 'success',
                title: 'Thanks for reaching out!',
                text: 'I\'ll be in touch soon.', 
                background: '#fdfdfd',
                confirmButtonColor: '#216578',
                allowEnterKey: true,
            
                           
              })
        })

    }

    render(){
        

    return(<div className = 'container' id = 'contact'>
    <h1 className = 'title' id = 'contact-title'>Contact</h1>
    <h3 className = 'sub-title'>If you want to get in touch with me please shoot me an email with the form below.</h3>
    <form method = 'post'>
        <fieldset className = 'contact-form'>
        <label>Name: </label>
            <input className = 'contact-input' type=  'text' onChange = {(e) => {this.setState({name: e.target.value})}}/> 
        <label>Email: </label>           
            <input className = 'contact-input' type = 'email' onChange = {(e) => {this.setState({email: e.target.value})}}/>   
        <label>Message: </label>    
            <textarea className = 'contact-input' type = 'text' rows = '10' onChange = {(e) => {this.setState({message: e.target.value})}}/>            
        </fieldset>
        <span className = 'btn' onClick = {() => {this.handleSubmit()}}>Send</span>
    </form>   
    <i className="fa fa-arrow-circle-up" aria-hidden="true" id = 'scroll-top' onClick = {() => {this.handleClick()}}></i> 
    </div>);
    }
}

export default Contact;