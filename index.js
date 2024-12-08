// npm run dev --> Build from next 

const express = require('express');
const path = require('path');
const fs = require('fs');
const next = require('next');

// Import the API app
const apiApp = require('./api');

const PORT = process.env.PORT || 3001;

// Temp directory for code files
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Initialize Express
const server = express();

// Initialize Next.js with standalone build
const nextApp = next({ dev: false, dir: path.join(__dirname, 'standalone') });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  // Mount API routes
  server.use('/', apiApp);

  // Handle requests with Next.js
  server.all('*', (req, res) => {
    return handle(req, res); // Pass requests to Next.js
  });

  // Start the server
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/api`);
    console.log(`Frontend served from: http://localhost:${PORT}/`);
  });

  // Cleanup on shutdown
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Performing cleanup...');
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    process.exit(0);
  });

  process.on('SIGINT', () => {
    console.log('Received SIGINT. Performing cleanup...');
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    process.exit(0);
  });
});
