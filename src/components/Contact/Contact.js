import React, {Component} from "react";

class Contact extends Component {
    constructor(){
        super();

        this.state = {
            name:'',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        

    }

    handleClick(){
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'

        })

    }

    render(){
    return(<div className = 'container' id = 'contact'>
    <h1 className = 'title' id = 'contact-title'>Contact</h1>
    <h3 className = 'sub-title'>If you want to get in touch with me please shoot me an email with the form below.</h3>
    <form method = 'post'>
        <fieldset className = 'contact-form'>
        <label>Name: </label>
            <input className = 'contact-input' type=  'text' onChange = {(e) => {this.handleChange(e.target.value)}}/> 
        <label>Email: </label>           
            <input className = 'contact-input' type = 'email' onChange = {(e) => {this.handleChange(e.target.value)}}/>   
        <label>Message: </label>    
            <input className = 'contact-input' type = 'text' onChange = {(e) => {this.handleChange(e.target.value)}}/>            
        </fieldset>
        <span className = 'btn'>Send</span>
    </form>   
    <i className="fa fa-arrow-circle-up" aria-hidden="true" id = 'scroll-top' onClick = {() => {this.handleClick()}}></i> 
    </div>);
    }
}

export default Contact;