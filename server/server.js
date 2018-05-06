const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require('../config');

const port = 3002;

//initialize express
const app = express();

//express static build
//app.use(express.static(`${__dirname}/../build`));

//Middlewares
//cors
app.use(cors());
//body-parser
app.use(json());



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.user,
        pass: config.pass
    }
})


//contact form endpoint
app.post('/contact', (req,res, next) => {
    const {name, email, message} = req.body;
    //configures the email body
    const mailOptions = {
        to: config.user,
        from: email, 
        subject: 'Contact Form Submission from Portfolio Site',
        text: `You have received a message from ${name}. You can respond to them at ${email}:\n ${message} `, //plain-text body
        html: `<span>You have received a message from <b>${name}</b>. You can respond to them at <b>${email}</b>.</span></br><h4>Message: </h4><p>${message}</p>` //html body
    
    }

//sends the email:
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    //console.log('Message sent: ' + info.response);
})

//sends response back to the front end if successful
res.status(200).json('Email was sent.');


})

//path
// const path = require('path')

app.listen(port, () => {
    console.log(`Avast matey, ye scurvy dog, we be listenin' on port ${port}`);
});





