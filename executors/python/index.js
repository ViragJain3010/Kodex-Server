// server/executors/python/index.js
const BaseExecutor = require('../baseExecutor');

class PythonExecutor extends BaseExecutor {
  constructor() {
    super('python');
    console.log('PythonExecutor/constructor');
  }

  async preProcess(code, input) {
    // Python can handle input directly through stdin
    return { code, input };
  }
}

module.exports = PythonExecutor;