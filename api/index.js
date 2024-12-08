import express from 'express';
import cors from 'cors';
import { ExpressAuth } from '@auth/express';
import GitHub from '@auth/express/providers/github';
import executeRouter from './routes/execute.js';
import testRoutes from './routes/test.js';
import languagesRoutes from './routes/languages.js';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use("/auth/*", ExpressAuth({ providers: [GitHub] }));

app.use('/api', executeRouter);
app.use('/api', testRoutes);
app.use('/api', languagesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

export default app;
