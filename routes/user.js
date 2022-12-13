const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')


const schema = mongoose.Schema 

const userSchema = new schema({
    email: String,
    name: String,
    phone: String,
    userId: String
})

const userModel = mongoose.model('user', userSchema)

module.exports = router

router.get('/ex', (req, res) =>{
    res.end('Sample route...')
})

router.post('/adduser', (req, res) => {
    console.log(req)
    const newUser = new userModel({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        userId: req.body.userId
    })

    newUser.save(function(err){
        if(!err){
            res.send('User added.')
        } else {
            res.send(err)
        }
    })
})

router.get('/getuser', (req, res) =>{
    userModel.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})


router.post('/getuserdata', (req, res) =>{
    userModel.find({userId:req.body.userId}, function(docs, err){
        if(!err){
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/updateuser', (req, res) => {
    userModel.findOneAndUpdate({userId:req.body.userId},{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    }, (err) => {
        if(!err){
            res.send('User updated.')
        } else {
            res.send(err)
        }
    })
})

router.post('/deleteuser', (req, res) => {
    userModel.findOneAndDelete({userId:req.body.userId}, (err) => {
        if(!err){
            res.send('User deleted.')
        } else {
            res.send(err)
        }
    })
})