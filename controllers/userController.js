const express = require('express')
const User = require('../models/User')
const Goal = require('../models/Goal')
const Step = require('../models/Step')

const router = express.Router({ mergeParams: true })

// get===index
router.get('/', (req, res) => {
  console.log('grabbed users from server')
  User.find().then((users) => {
    res.json(users)
    console.log('users data', users)
  })
    .catch((err) => console.log(err))
})


//post===create====works

// router.post('/', (req, res) => {
//   console.log('hit post route')
//     const newUser = new User({
//         name: req.body.name,
//         imgUrl: req.body.imgUrl,
//         userInfo: req.body.userInfo
//     })
//     newUser.save().then((savedUser) => {
//         res.json(savedUser)
//         console.log('new user info', newUser)
//     })
// })
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (error) {
    console.log(error)
  }
})
//show===works
router.get('/:id', (req, res) => {
  console.log('hit the find user by  router')
  User.findById(req.params.id).then((user) => {
    res.json(user)
  }).catch((err) => {
    res.status(500)
    res.json(err)
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
  console.log('from the patch route')
  //get the user id from the id params
  const userId = req.params.id
  console.log('found user', userId)
  //grab the updated user info from the req body
  const updatedUser = req.body

  User.findByIdAndUpdate(req.params.id, updatedUser, { new: true })
    .then(() => {
      res.redirect(`/api/users/${userId}`)
    })
})

//delete
router.delete('/:id', (req, res) => {
  console.log('hit the delete route')
  //grab the company you want to delete
  const userId = req.params.id
  User.findByIdAndRemove(userId)
    //redirect back to the users index page
    .then(() => {
      res.json('deleted user')
    }).catch((err) => {
      console.log(err)
    })
})
// DELETE route
// router.delete('/:id', async (req, res) => {
//   try {
//     const creatureId = req.params.id
//     await Creature.findByIdAndRemove(creatureId)
//     res.json({
//       msg: 'Successfully Deleted'
//     })
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err)
//   }
// })

module.exports = router