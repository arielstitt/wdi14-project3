const mongoose = require('mongoose')
const goalSchema = require('./goalSchema')
const stepSchema = require('./stepSchema')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: String,
    imgUrl: String, 
    userInfo: String, 
    goals: [ goalSchema ]
})


module.exports = userSchema