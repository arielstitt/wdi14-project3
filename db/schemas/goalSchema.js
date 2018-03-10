const mongoose = require('mongoose')
const goalSchema = require('./goalSchema')
const Schema = mongoose.Schema

const goalSchema = newSchema({
    title: String,
    steps: [ stepSchema ]//this sets up a one to many relationship
})

mondule.exports = goalSchema