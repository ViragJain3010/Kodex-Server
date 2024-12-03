// server/api/index.js
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authMiddleware = require('../middleware/auth')
const executeRouter = require('./routes/execute')
const testRoutes = require('./routes/test')
const languagesRoutes = require('./routes/languages')
const authRoutes = require('./routes/auth')

const app = express()

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))
app.use(cookieParser())
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/api', executeRouter)
app.use('/api', testRoutes)
app.use('/api', languagesRoutes)
app.use('/api', authRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

module.exports = app