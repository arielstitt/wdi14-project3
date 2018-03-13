const express = require('express')
const User = require('../models/User')
const Goal = require('../models/Goal')
const Step = require('../models/Step')

const router = express.Router({ mergeParams: true })

// get===index
router.get('/', (req, res) => {
    User.find().then((goals) => {
      res.json(goals)
    })
    .catch((err) => console.log(err))
  })


  module.exports = router