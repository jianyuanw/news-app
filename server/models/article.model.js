const mongoose = require('mongoose')

const schema = mongoose.Schema({
  title: String,
  comments: String,
  imageBuffer: Buffer,
  imageMimeType: String,
  datePosted: Date,
  username: String
})

const Article = mongoose.model('Article', schema)

Article.watch().on('change', data => console.info(new Date(), data))

module.exports = Article