require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const User = require('../models/Goal')
const User = require('../models/Step')

const steve = new User({
    name: 'Steve',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Steve_Buscemi_%281996%29.jpg/220px-Steve_Buscemi_%281996%29.jpg',
    userInfo: 'I want to me a famous actor'
})

const