const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: String,
  password: String
})

const User = mongoose.model('User', schema)

User.watch().on('change', data => console.info(new Date(), data))

module.exports = User