const BaseExecutor = require('../baseExecutor');

class JavaScriptExecutor extends BaseExecutor {
  constructor() {
    super('javascript');
    console.log('JavaScriptExecutor/constructor');
  }

  async preProcess(code, input) {
    // Add console input handling if input is provided
    console.log('JavaScriptExecutor/preProcess');

    if (input) {
      const wrappedCode = `
        const input = \`${input.replace(/`/g, '\\`')}\`;
        const lines = input.split('\\n');
        let lineIndex = 0;
        
        // Mock readline functionality
        const readline = {
          question: (query) => {
            console.log(query);
            return lines[lineIndex++] || '';
          }
        };

        ${code}
      `;
      return { code: wrappedCode, input: '' };
    }
    return { code, input };
  }
}

module.exports = JavaScriptExecutor;