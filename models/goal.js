const mongoose = require('mongoose')
const goalSchema = require('../db/schemas/goalSchema')

//apply existing schema to a mogoose model named goal
//this gives us the abilitu to use methids like dinfByID, creat, etc

const Goal = mongoose.model('goal', goalSchema)

module.exports = Goal