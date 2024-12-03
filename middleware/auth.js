// server/middleware/auth.js
const TokenService = require('../utils/jwt')

const authMiddleware = async (req, res, next) => {
  try {
    // Extract token
    const token = TokenService.extractTokenFromHeader(req)
    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }

    // Verify token
    const decoded = TokenService.verifyToken(token)
    if (!decoded) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    // Validate session
    const session = await TokenService.validateSession(decoded.sessionId)
    if (!session) {
      return res.status(401).json({ error: 'Invalid or expired session' })
    }

    // Attach user and session to request
    req.user = session.user
    req.session = session
    next()
  } catch (error) {
    console.error('Auth middleware error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = authMiddleware