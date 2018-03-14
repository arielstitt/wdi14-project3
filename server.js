require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const logger = require('morgan')

//connect to the mongoose database
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

//console.log on connection and on err
const connection = mongoose.connection
connection.on('connected', ()=>{
    console.log('Mongoose Connectd Succesfully')
})
connection.on('error', (err)=>{
    console.log('Mongoose default connection error:' + err)
})
//inject middleware
app.use(logger('dev'))
app.use(bodyParser.json())

//routes
//all users route
const userController = require('./controllers/userController')
app.use('/api/users', userController)
//user goals page
const goalController = require('./controllers/goalController')
app.use('/api/users/:userId/goals', goalController)

//these two lines of code are needed to deploy to heroku
app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

//send to index.html if it fails
//set up request that sends back 'Hello World'
app.get('/', (req, res)=>{
    res.send('Hello World')
})



//tell your app to listen on port 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('Listening on port' + PORT)
})