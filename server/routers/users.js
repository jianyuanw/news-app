const express = require('express')

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
  res.status(200).send(`${req.method} ${req.originalUrl}`)
})

module.exports = userRouter