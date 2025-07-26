import { elizaPatterns } from '../data/elizaPatterns.js';

export class ElizaEngine {
  constructor() {
    this.patterns = elizaPatterns;
  }

  processResponse(response, match) {
    return response.replace(/\$(\d+)/g, (_, num) => {
      const index = parseInt(num);
      return match[index] ? match[index].trim() : '';
    });
  }

  getResponse(input) {
    const cleanInput = input.trim().toLowerCase();
    
    if (!cleanInput) {
      return "Please say something.";
    }
    
    for (let i = 0; i < this.patterns.length; i++) {
      const pattern = this.patterns[i];
      const match = cleanInput.match(pattern.pattern);
      
      if (match) {
        const response = pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
        return this.processResponse(response, match);
      }
    }
    
    return "I'm not sure I understand. Can you rephrase that?";
  }
}