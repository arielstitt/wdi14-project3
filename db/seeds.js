require('dotenv').config()
const mongoose = require('mongoose')
//========node db/seeds.js=====
mongoose.connect(process.env.MONGODB_URI)

//require all the models
const User = require('../models/User')
const Goal = require('../models/Goal')
const Step = require('../models/Step')



const db = mongoose.connection
db.on('open', () => {
    console.log('You have connected to mongoDB!')
})
db.on('error', (err) => {
})

// ======== STEPS ========

const travelStep = new Step({
    date: 'Week 2 of March',
    description: 'Purchase Passport.'

})
// console.log(Step)
// ======== Goals ===========
const travel = new Goal({
    title: 'Buy passport',
    steps: [ travelStep ]

})
//======USER=======
const steve = new User({
    name: 'Steve',
    imgUrl: 'https://cdnb3.artstation.com/p/assets/images/images/001/863/575/large/irakli-nadar-artstation-da.jpg?1453903033', 
    userInfo: 'Steve is a father of two.', 
    goals: [travel]
})
//remove users
User.remove().then(() => {
//remove goal
    return Goal.remove()
}).then(() => {
//remove step
    return Step.remove()
}).then(() => {
//the save the multiple users to the database
    return User.insertMany([steve])
}).then((users) => {
    console.log(users)
//then close the database
    console.log('Saved Successfully')
    db.close()
//if there are errors, log the error and close the db
}).catch((err) => {

    console.log(err)
    db.close()
})