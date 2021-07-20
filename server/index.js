// Imports
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = require('./app')
const userRouter = require('./routers/users')
const articleRouter = require('./routers/articles')
require('dotenv').config()
require('./models/db')

// Middleware
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
app.use('/api/users', userRouter)
app.use('/api/articles', articleRouter)

// Start application once database is connected
const PORT = process.env.PORT
console.log(`Port = ${PORT}`)

app.once('dbConnected', () => {
  app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}. Timestamp: ${new Date()}`)
  })
})
