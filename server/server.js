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

const mailOptions = {
    from: 'sender@email.com', //change this
    to: config.user,
    subject: 'Contact Form Submission from zcericola.com',
    text: 'Hello World!', //plain-text body
    html: '<b>Hello World!</b>' //html body

}


//send mail with transport object
//keep commented until ready to test -- sends automatically at the moment
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
// })


//contact form endpoint
app.post('/contact', (req,res, next) => {
    console.log(req.body);
})

//path
// const path = require('path')
app.listen(port, () => {
    console.log(`Avast matey, ye scurvy dog, we be listenin' on port ${port}`);
});





