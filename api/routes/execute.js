import express from 'express';
import ExecutorFactory from '../../executors/index.js';
import { validateLanguage } from '../../config/languages.js';

const router = express.Router();

// Validation middleware
const validateExecuteRequest = (req, res, next) => {
  const { language, code } = req.body;

  if (!language || typeof language !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Language is required and must be a string'
    });
  }

  if (!code || typeof code !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Code is required and must be a string'
    });
  }

  if (req.body.input && typeof req.body.input !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Input must be a string'
    });
  }

  next();
};

// Execute code endpoint
router.post('/execute', validateExecuteRequest, async (req, res) => {
  try {
    const { language, code, input = '' } = req.body;

    // Validate language
    if (!validateLanguage(language)) {
      return res.status(400).json({
        success: false,
        error: `Unsupported language: ${language}`
      });
    }

    // Get appropriate executor
    const executor = ExecutorFactory.getExecutor(language);

    // Execute code
    const result = await executor.execute(code, input);

    // Send response
    res.json({
      success: result.success,
      path:  ' at server/api/routes/execute.js/1',
      output: result.output ,
      error: result.error,
      executionTime: result.executionTime
    });

  } catch (error) {
    console.error('Execution error:', error);
    res.status(500).json({
      success: false,
      path: ' at server/api/routes/execute.js/2',
      error: 'Execution failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;