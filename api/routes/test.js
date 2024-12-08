// server/api/routes/test.js
import express from 'express';
import {getLanguageConfig } from '../../config/languages.js';
import dockerRunner from "../../utils/docker.js"

const router = express.Router();

router.post('/test', async (req, res) => {
    try {
        const config = getLanguageConfig('python');
        const result = await dockerRunner.runCode(
            config,
            // "#include<bits/stdc++.h>\nusing namespace std;\nint main() {int n; cin >> n; cout << n; return 0;}",
            'n=input() \nprint(n)',
            // 'console.log("Hello, World!");',
            '3010'
        );
        res.json(result);
    } catch (error) {
        console.error('Docker execution error:', {
            message: error.message,
            stack: error.stack,
            details: error.json || error.reason || error.statusCode,
            fullError: JSON.stringify(error, null, 2)
          });
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

export default router;