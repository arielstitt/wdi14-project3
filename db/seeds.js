require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const User = require('../models/Goal')
const User = require('../models/Step')


// ======= USER ========
const steve = new User({
    name: 'Steve',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Steve_Buscemi_%281996%29.jpg/220px-Steve_Buscemi_%281996%29.jpg',
    userInfo: 'I want to me a famous actor',
    goals: [ travel, passTest ]
})
// ======== Goals ===========
const travel = new Goal({
    title: 'Travel More',
    steps: [ travelStep ]

})
const passTest = new Goal({
    title: 'Travel More',
    steps: [ testStep ]

})

// ======== STEPS ========
const testStep = new Step({
    date: 'Days of March',
    description: 'Study for 30 minutes every day.'

})
const travelStep = new Step({
    date: 'Week 2 of March',
    description: 'Purchase Passport.'

})