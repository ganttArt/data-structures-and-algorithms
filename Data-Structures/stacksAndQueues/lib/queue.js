'use strict';

class Queue {
  constructor() {
    this.length = 0; // this length property is used to house the length AND is used as a way to enqueue/dequeue
    this.next = null; // this is important for dequeue - "next" hold the next value to dequeue
  }

  enqueue(value) {
    this[this.length] = value;
    this.length++;
    if (!this.next) this.next = 0;
    return this;
  }

  dequeue() {
    if (this.next === null) throw 'Error: empty queue';
    let result = this[this.next];
    delete this[this.next];
    this.length--;
    this.length === 0 ? this.next = null : this.next ++;
    return result;
  }

  peek() {
    if (this.length === 0) throw 'Error: empty queue';
    return this[this.next];
  }

  isEmpty() {
    return ((this.length === 0) && (this.next === null)) ? true : false;
  }
}

module.exports = Queue;
