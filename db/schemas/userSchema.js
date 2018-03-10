const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: String,
    imgUrl: String, 
    description: String
})

module.exports = userSchema