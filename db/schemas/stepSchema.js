const mongoose = require('mongoose')
const stepSchema = require('./stepSchema')
const Schema = mongoose.connection.Schema

const stepSchema = new Schema({
    date: String, 
    description: String
})

mondule.export = stepSchema