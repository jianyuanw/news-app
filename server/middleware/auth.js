const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const auth = (req, res, next) => {
  const token = req.headers['x-access-token']
  
  if (!token) {
    return res.status(401).json({ auth: false, message: 'No token provided.' })
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' })
    }
    
    const userId = decoded.id
    User.findById(userId, (err, user) => {
      if (err) {
        console.error(`Error in User.findById: ${err}`)
        res.status(500).send(err)
      }

      req.user = user
      next()
    })
  })
}

module.exports = auth