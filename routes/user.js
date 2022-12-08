const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')


const schema = mongoose.Schema 

const userSchema = new schema({
    name: String,
    email: String,
    phone: String,
    userId: String
})

const userModel = mongoose.model('user', userSchema)

module.exports = router

router.get('/ejemplo', (req, res) =>{
    res.end('Ruta ejemplo...')
})

router.post('/adduser', (req, res) => {

    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
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