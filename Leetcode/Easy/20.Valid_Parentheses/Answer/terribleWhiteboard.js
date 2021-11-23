// https://terriblewhiteboard.com/valid-parentheses-leetcode-20/
// https://www.youtube.com/watch?v=hUOkKDqVlig

/**
 * @param {string} s
 * @return {boolean}
 */
 let isValid = function(s) {
    let stack = new Stack();
  
    for (let character of s) {
      if (character === '{' || character === '[' || character === '(') {
        stack.push(character);
      } else if (!stack.isEmpty() && character === '}' && stack.peek() === '{') {
        stack.pop();
      } else if (!stack.isEmpty() && character === ')' && stack.peek() === '(') {
        stack.pop();
      } else if (!stack.isEmpty() && character === ']' && stack.peek() === '[') {
        stack.pop();
      } else {
        return false;
      }
    }
  
    return stack.isEmpty();
  };
  
  
  
  class Stack {
    constructor() {
      this.count = 0;
      this.storage = {};
    }
  
    push(val) {
      this.storage[this.count] = val;
      this.count++;
    }
  
    getCount() {
      return this.count;
    }
  
    pop() {
      if (this.count === 0) {
        return undefined;
      }
  
      this.count--;
      let result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  
    peek() {
      let result = this.storage[this.count - 1];
      return result;
    }
  
    isEmpty() {
      return this.count === 0;
    }
  }