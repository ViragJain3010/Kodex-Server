import app from './api/index.js';
import path from 'path';
import fs from 'fs';

// Get the current directory using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const PORT = process.env.PORT || 3001;

// Create temp directory for code files if it doesn't exist
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/`);
});

// Handle cleanup on shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Performing cleanup...');
  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Performing cleanup...');
  // Clean up temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  process.exit(0);
});
