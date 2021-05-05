'use strict';

const Stack = require('../lib/stack');

function multiBracketValidation(input) {
  let stack = new Stack();

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if ((char === '(') || (char === '{') || (char === '[')) {
      stack.push(char);
      continue;
    }
    if (stack.isEmpty()) // case: if we get a closing bracket and the stack is empty
      return false;

    let top = stack.pop();

    if ((top === '(') && (char !== ')')) return false;
    else if ((top === '{') && (char !== '}')) return false;
    else if ((top === '[') && (char !== ']')) return false;

    return stack.isEmpty();
  }
}

module.exports = multiBracketValidation;

// implementation assistance from https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
