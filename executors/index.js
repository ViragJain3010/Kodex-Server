// server/executors/index.js
const JavaScriptExecutor = require('./javascript');
const PythonExecutor = require('./python');
const CppExecutor = require('./cpp');

class ExecutorFactory {
  static getExecutor(language) {
    switch (language.toLowerCase()) {
      case 'javascript':
        return new JavaScriptExecutor();
      case 'python':
        return new PythonExecutor();
      case 'cpp':
        return new CppExecutor();
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }
}

module.exports = ExecutorFactory;