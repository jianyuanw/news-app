const express = require('express')
const Article = require('../models/article.model')
const auth = require('../middleware/auth')

const articleRouter = express.Router()

// For testing only
articleRouter.get('/test', (req, res) => {
  res.status(200).send(`${req.method} ${req.originalUrl}`)
})

// Retrieve all articles
// GET /api/articles
articleRouter.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) {
      console.error(`Error in Article.find: ${err}`)
      return res.status(500).send(err)
    }

    res.status(200).json(articles)
  })
})

// Create new article
// POST /api/articles
articleRouter.post('/', auth, (req, res) => {
  const title = req.body.title
  const content = req.body.content
  const imageSrc = req.body.imageSrc
  const userId = req.user._id

  const article = new Article({ title, content, imageSrc, userId })

  article.save().then(() => {
    res.status(201).send('Article posted.')
  })
})

module.exports = articleRouter