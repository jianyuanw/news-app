const express = require('express')

const articleRouter = express.Router()

articleRouter.get('/', (req, res) => {
  res.status(200).send(`${req.method} ${req.originalUrl}`)
})

module.exports = articleRouter