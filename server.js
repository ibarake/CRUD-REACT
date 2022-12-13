const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const fileDB = require('./connection')

const userRoute = require('./routes/user')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/user', userRoute)

app.get('/', (req, res) => {
    res.end('Backend')
})

app.listen(5000, () => {
    console.log('Server running...')
})

