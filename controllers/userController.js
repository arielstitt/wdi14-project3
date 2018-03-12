const express = require('express')
const User = require('../models/User')
const Goal = require('../models/Goal')
const Step = require('../models/Step')

const router = express.Router({mergeParams: true})

router.get('/', (req,res)=>{
    User.find().then((users)=>{
        console.log(users)
        res.render('user/index', {
            users: users
        })
    })
})
//new
router.get('/new', (req,res)=>{
    res.render('user/new')
})

//post

router.post('/', (req,res)=>{
    const newUser = new User({
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        userInfo: req.body.userInfo
    })
    newUser.save().then((savedUser)=>{
        res.redirect(`/users/${savedUser._id}`)
    })
})

//show
router.get('/:id', (req,res)=>{
    User.findById(req.params.id).then((user)=>{
        res.render('user/show',{
            user:user
        })
    })
})

//edit
router.get('/:id/edit', (req,res)=>{
    User.findById(req.params.id).then((user)=>{
        res.render('user/edit', {
            id:req.params.id,
            user: user
        })
    })
})

//update
router.patch('/:id', (req, res)=>{
    User.findByIdAndUpdate(req.params.id, {
        name: req.params.name,
        imgUrl: req.body.imgUrl,
        userInfo: req.body.userInfo
    })
})