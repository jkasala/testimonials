# Testimonials

This is a simple Nodejs + Express + MongoDB app that implements the popular 'testimonials' section you see on all the websites these days.  Users can write up a testimonial and it gets put in the database.  The website administrator can use the 'admin' page to choose which testimonials get displayed.

##Demo

http://testimonials.jeremykasala.com

##Usage

- You must have Node.js, the Express framework, and MongoDB installed
- Clone the repo and install dependencies: 
```sh 
git clone https://github.com/jkasala/testimonials.git 
cd testimonials
npm install
```
- Create a new directory in the root folder called 'data', then tell mongoDB this is where the database files will live
```sh 
mkdir data
/path/to/mongodb-installation/bin/mongod --dbpath data
```
- start the app
```sh 
npm start
```
- You should be able to access the app in the browser at http://localhost:3000
