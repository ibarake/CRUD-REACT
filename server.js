const express = require('express')
const app = express()

const fileDB = require('./connection')

const userRoute = require('./routes/user')
app.use('/api/user', userRoute)

const bodyParser = require('body-parser')
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: 'true'}))

app.get('/', (req, res) => {
    res.end('Backend')
})

app.listen(5000, () => {
    console.log('Server running...')
})
