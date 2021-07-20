const express = require('express')
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
require('dotenv').config()

const JWT_KEY = process.env.JWT_KEY

const userRouter = express.Router()

// Register
// POST /api/users/register
userRouter.post('/register', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  
  // Validate username & password
  const alphanumeric = /^[A-Za-z0-9]+$/
  if (!username.match(alphanumeric) || !password.match(alphanumeric)) {
    console.log('Username and password can only contain alphanumeric characters.')
    return res.send('Username and password can only contain alphanumeric characters.')
  }
  
  // Check if username exists
  User.exists({ username }, (err, result) => {
    if (err) {
      console.error(`Error in User.exists: ${err}`)
      return res.status(400).send(err)
    } 

    // Username exists
    if (result) {
      console.info(`Username exists.`)
      return res.status(400).send('Username is not available for registration.')
    }

    // Username ok --> encode password
    console.info('Encoding password...')
    const hash = bcrypt.hashSync(password, 8)

    // Save user to db
    const user = new User({
      username,
      password: hash
    })
    user.save().then(() => {
      res.status(201).json('Account created')
    })
  })
})

// Login
// POST /api/users/login
userRouter.post('/login', (req, res) => {
  console.info(req.body)
  const username = req.body.username
  const password = req.body.password

  // Retrieve user from db by username
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.error(`Error in User.findOne: ${err}`)
      return res.send(err)
    }

    if (!user) {
      console.info('User does not exist')
      return res.status(401).send('Incorrect username or password.')
    }

    // Verify password
    const passwordMatch = bcrypt.compareSync(password, user.password)
    if (passwordMatch) {
      const expiresIn = 3600
      const token = jwt.sign({ id: user._id }, JWT_KEY, { expiresIn })
      res.status(200).json({ message: 'Login success', token, username, expiresIn })
    } else {
      res.status(401).send('Incorrect username or password.')
    }
  })
})

// Logout
// POST /api/users/logout
userRouter.post('/logout', auth, (req, res) => {
  res.status(200).json({ message: 'Logout success', token: null, username: null, expiresIn: null })
})

module.exports = userRouter