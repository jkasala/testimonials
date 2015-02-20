# Testimonials

This is a simple Nodejs + Express + MongoDB app that implements the popular 'testimonials' section you see on all the websites these days.  Users can write up a testimonial and it gets put in the database.  The website administrator can use the 'admin' page to choose which testimonials get displayed.

##Demo

http://testimonials.jeremykasala.com

##Usage

- First, you must have Node.js and the Express.js framework installed.
- Install MongoDB
- Open a command shell cd to the directory where you downloaded the app.  Run 'npm install' to get the app dependencies.
- Create a new directory in the app folder called 'data'.  Open another command shell in this directory, and run 'path/to/mongodb/bin/mongod --dbpath data'
- Run 'npm start' and you should be able to access the app in the browser at http://localhost:3000
