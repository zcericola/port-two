import React from "react";

const Contact = () => {
    return(<div className = 'container' id = 'contact'>
    <h1 className = 'title'>Contact</h1>
    <h3 className = 'sub-title'>If you want to get in touch with me please shoot me an email with the form below.</h3>
    <form method = 'post'>
        <fieldset className = 'contact-form'>
        <label>Name: </label>
            <input className = 'contact-input' type=  'text'/> 
        <label>Email: </label>           
            <input className = 'contact-input' type = 'email'/>   
        <label>Message: </label>    
            <input className = 'contact-input' type = 'text'/>            
        </fieldset>
        <span className = 'btn'>Send</span>
    </form>       

    </div>);

}

export default Contact;