const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: String,
    imgUrl: String, 
    userInfo: String, 
    goals: [ goalSchema ]
})

const goal

module.exports = userSchema