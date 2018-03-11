const mongoose = require('mongoose')
const userSchema = require('./userSchema')
const stepSchema = require('./stepSchema')
const Schema = mongoose.Schema

const goalSchema = new Schema({
    title: String,
    steps: [ stepSchema ]
})

module.exports = goalSchema