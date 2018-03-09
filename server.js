require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const logger = require('morgan')

//connect to the mongoose database
mongoose.Promise = global.Promisemongo.connect(process.env.MONGODB_URI)
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

//set up request that sends back 'Hello World'
app.get('/', (req, res)=>{
    res.send('Hello World')
})



//tell your app to listen on port 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('Listening on port' + PORT)
})