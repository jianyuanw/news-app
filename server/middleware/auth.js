const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).json({ auth: false, message: 'No Authorization header provided.' })
  }

  if (!authHeader.startsWith('Bearer')) {
    return res.status(401).json({ auth: false, message: 'Incorrect Authorization header format.' })
  }

  const token = authHeader.substring(7);

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