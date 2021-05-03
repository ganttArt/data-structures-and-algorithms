'use strict';

const Stack = require('./stack');

class PseudoQueue {
  constructor () {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    // Move all elements from s1 to s2
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }

    // Push value to s1
    this.s1.push(value);

    // Push every thing back to s1
    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.pop());
    }

    return this.s1;
  }

  dequeue() {
    if (this.s1.isEmpty()) throw 'Error: Empty Queue';
    return this.s1.pop();
  }
}

// Approach taken came with help from geeksforgeeks https://www.geeksforgeeks.org/queue-using-stacks/

module.exports = PseudoQueue;
