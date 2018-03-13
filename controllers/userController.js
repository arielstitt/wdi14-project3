const express = require('express')
const User = require('../models/User')
const Goal = require('../models/Goal')
const Step = require('../models/Step')

const router = express.Router({ mergeParams: true })

// get===index
router.get('/', (req, res) => {
    User.find().then((users) => {
      res.json(users)
    })
    .catch((err) => console.log(err))
  })


//post===create

router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        userInfo: req.body.userInfo
    })
    newUser.save().then((savedUser) => {
        res.redirect(`/users/${savedUser._id}`)
    })
})

//show
router.get('/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.send(user)
    }).catch((err)=>{
        res.status(500)
        res.send(err)
    })
})

//edit
router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.render('user/edit', {
            id: req.params.id,
            user: user
        })
    })
})

//update
router.patch('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        name: req.params.name,
        imgUrl: req.body.imgUrl,
        userInfo: req.body.userInfo
    })
})

module.exports = router