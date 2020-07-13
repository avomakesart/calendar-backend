const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./database/config')

// sever creation
const app = express()

// Databases
dbConnection()

// cors
app.use(cors())

// public directory
app.use(express.static('public'))

// read and body parser
app.use(express.json())

// routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// listen the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})



