const mongoose = require('mongoose')

const schema = mongoose.Schema({
  title: String,
  content: String,
  imageSrc: String,
  userId: String
})

const Article = mongoose.model('Article', schema)

Article.watch().on('change', data => console.info(new Date(), data))

module.exports = Article