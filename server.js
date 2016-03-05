//**************required packages for the entire app***********************
var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')
var bodyParser = require('body-parser')
//*********************app is an instance of express **********************
var app = express()
//*************************requires routes *********************************
var catRoutes = require('./routes/cats.js')
var ownerRoutes = require('./routes/owners.js')

//********************requires the models for Cat and Owner
var Cat = require('./models/Cat.js')
var Owner = require('./models/Owner.js')

//********************connects the app to MongoDB ***********************
mongoose.connect('mongodb://localhost/cat_catalogue', function(err){
  if (err)
    throw err
    console.log("Your server is running MongoDB(cat_catalogue), weeee!")
})

//********************asks the app to use the middleware packages*********
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//******************** asks the app to use the routes ********************
app.use('/cats', catRoutes)
app.use('/owners', ownerRoutes)

//*******************route for the home page******************************
app.get('/', function(req,res){
	res.send('Home!')
})



//**************tells the app to listen and connect to port 3000**********
app.listen(3000, function(){
  console.log("Your server is listening on port 3000, so exciting!!!!!!")
})
