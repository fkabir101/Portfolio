const express = require("express");
const routes = require("./routes");
const session = require('express-session');
const morgan = require('morgan');


const app = express();


const PORT = process.env.PORT || 3001;

//for logging in

app.use(morgan('dev')); // for logging

//To keep track of user's login status
app.use(session({secret: "keyboard dog", resave: true, saveUninitialized: true}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));
app.use(routes);


app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`)
})