// server/api/routes/auth/index.js
const express = require('express')
const router = express.Router()
const prisma = require('../../utils/prisma')
const TokenService = require('../../utils/jwt')

// Validate session and issue JWT
router.post('/session', async (req, res) => {
  try {
    const { sessionToken } = req.body
    
    if (!sessionToken) {
      return res.status(400).json({ error: 'Session token required' })
    }

    const session = await TokenService.validateSession(sessionToken)
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' })
    }

    const token = TokenService.generateToken(session.user)
    res.json({ token })
  } catch (error) {
    console.error('Session validation error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get current user
router.get('/me', async (req, res) => {
  try {
    const token = TokenService.extractTokenFromHeader(req)
    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }

    const decoded = TokenService.verifyToken(token)
    if (!decoded) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
      }
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    console.error('Get user error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router