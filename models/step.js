const mongoose = require('mongoose')
const stepSchema = require('../db/schemas/stepSchema')


const Step = mongoose.model('step', stepSchema)

module.exports = Step