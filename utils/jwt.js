// // server/utils/jwt.js
// const jwt = require('jsonwebtoken')
// const prisma = require('./prisma')

// const JWT_SECRET = process.env.JWT_SECRET
// const TOKEN_EXPIRY = '24h'

// class TokenService {
//   static generateToken(user) {
//     return jwt.sign(
//       {
//         userId: user.id,
//         email: user.email,
//         sessionId: user.sessionToken
//       },
//       JWT_SECRET,
//       { expiresIn: TOKEN_EXPIRY }
//     )
//   }

//   static verifyToken(token) {
//     try {
//       return jwt.verify(token, JWT_SECRET)
//     } catch (error) {
//       return null
//     }
//   }

//   static async validateSession(sessionToken) {
//     try {
//       const session = await prisma.session.findUnique({
//         where: { sessionToken },
//         include: { user: true }
//       })

//       if (!session || new Date(session.expires) < new Date()) {
//         return null
//       }

//       return session
//     } catch (error) {
//       console.error('Session validation error:', error)
//       return null
//     }
//   }

//   static extractTokenFromHeader(req) {
//     const authHeader = req.headers.authorization
//     if (!authHeader?.startsWith('Bearer ')) return null
//     return authHeader.substring(7)
//   }
// }

// module.exports = TokenService