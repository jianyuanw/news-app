const express = require('express')
const multer = require('multer')
const Article = require('../models/article.model')
const auth = require('../middleware/auth')

const articleRouter = express.Router()
const upload = multer()

// Retrieve all articles
// GET /api/articles
articleRouter.get('/', (req, res) => {
  console.log(`${req.method} ${req.originalUrl}`)

  Article.find({}, (err, articles) => {
    if (err) {
      console.error(`Error in Article.find: ${err}`)
      return res.status(500).send('Error while retrieving articles.')
    }

    res.status(200).json(articles)
  })
})

// Create new article
// POST /api/articles
articleRouter.post('/', auth, upload.single('imageFile'), (req, res) => {
  const title = req.body.title
  const comments = req.body.comments
  const imageBuffer = req.file.buffer
  const imageMimeType = req.file.mimetype
  const datePosted = new Date()
  const username = req.user.username

  const article = new Article({
    title,
    comments,
    imageBuffer,
    imageMimeType,
    datePosted,
    username
  })

  article.save()
    .then(data => {
      console.log('Article saved.')
      res.status(200).json({ message: 'Article posted.' })
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Error while posting article.' })
    })
})

module.exports = articleRouter