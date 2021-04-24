'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    }
    else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insert(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  includes(value) {
    if(!this.head) {
      return false;
    }
    let current = this.head;

    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    if (current.value === value) {
      return true;
    }
    return false;
  }

  toString() {
    if(!this.head) {
      return 'NULL';
    }
    let strRepr = '';
    let current = this.head;
    while(current.next) {
      strRepr += `{ ${current.value} } -> `;
      current = current.next;
    }
    strRepr += `{ ${current.value} } -> NULL`;
    return strRepr;
  }
}

module.exports = LinkedList;
