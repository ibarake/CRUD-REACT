const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ibarake:barake0603@cluster0.c8cjvmo.mongodb.net/test')

const objectDB = mongoose.connection

objectDB.on('connected', ()=>{ console.log('DB connected...')})
objectDB.on('error', ()=>{ console.log('DB error, try again...')})

