# Zac's Web Developer Portfolio

## Update: This version is out of date and is not the same as what is currently hosted at [zcericola.com](http://www.zcericola.com)

This is my fourth or fifth iteration of my portfolio in the past year or so, as I've gotten more adept at web development and using various tools, I've updated. What once started out as a just and HMTL and a CSS page, is now built with React. I didn't have to use a library for this, considering it's just a simple portfolio but, I chose to because I enjoy the composable nature of React, as well as the organizational structure. 

## Process
All of the styling was done by hand using SASS, a CSS pre-processor that allows me to use variables, mixins, and nesting among other features to enhance the utility of normal CSS. It's fully mobile responsive, taking advantage of various media queries to ensure it looks good on many different viewports. Any animations were done using plain CSS keyframes as well. I chose the color scheme after finding the background picture on [Unsplash](https://www.unsplash.com). From there, I used [coolers](https://www.coolors.co) to pull relevant colors from the picture and I built my palette around that. Wire-framing and initial layout design was done using pencil and paper as well as Adobe XD. I used a JavaScript module called [ZenScroll](https://github.com/zengabor/zenscroll) to get the smooth-scroll animation without having to resort to JQuery. I like how it's only 1.4 KB large and built with just plain old JavaScript. (Plus, it just works!). 

For the contact form, I did all the form validation myself with JavaScript and used SweetAlert2 for the notification pop-ups. Nodemailer was used on the server along with mailgun-transport to allow for the contact form messages to be sent to my inbox. 

## Future Plans
Implement a blog page where I can take notes and write about new technologies I learn.
