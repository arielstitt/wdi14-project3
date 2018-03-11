const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const goalSchema = require('./goalSchema')
const Schema = mongoose.Schema

const stepSchema = new Schema({
    date: String, 
    description: String
})

module.export = stepSchema