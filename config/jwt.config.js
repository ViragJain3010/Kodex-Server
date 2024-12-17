// server/config/jwt.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = '7d';

export const generateAccessToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      username: user.username, 
      email: user.email 
    }, 
    JWT_SECRET, 
    { expiresIn: JWT_EXPIRATION }
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      username: user.username, 
      email: user.email 
    }, 
    JWT_SECRET, 
    { expiresIn: REFRESH_TOKEN_EXPIRATION }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const refreshAccessToken = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);
    
    // Generate new access token
    return generateAccessToken({
      id: decoded.id,
      username: decoded.username,
      email: decoded.email
    });
  } catch (error) {
    return null;
  }
};