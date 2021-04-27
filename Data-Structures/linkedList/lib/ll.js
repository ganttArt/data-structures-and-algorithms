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

  insertBefore(value, newValue) {
    if (this.head.value === value) {
      this.insert(newValue);
      return this;
    }
    else if (this.head && this.head.next) {
      let previous = this.head;
      let current = this.head.next;
      while (current.next) {
        if (current.value === value) {
          let newNode = new Node(newValue);
          newNode.next = current;
          previous.next = newNode;
          return this;
        }
        else {
          previous = current;
          current = current.next;
        }
      }
      if (current.value === value) {
        let newNode = new Node(newValue);
        newNode.next = current;
        previous.next = newNode;
        return this;
      }
    }
    return 'Value not in Linked List';
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        let after = current.next;
        current.next = new Node(newValue);
        current.next.next = after;
        return this;
      }
      else {
        current = current.next;
      }
      if (current.value === value) {
        let after = current.next;
        current.next = new Node(newValue);
        current.next.next = after;
        return this;
      }
    }
    return 'Value not in Linked List';
  }

  getLength() {
    if(!this.head) {
      return 0;
    }
    let current = this.head;
    let length = 1;
    while (current.next) {
      length += 1;
      current = current.next;
    }
    return length;
  }

  kthFromEnd(k) {
    const length = this.getLength();
    if (k > length) throw 'Error: k > length of linked list';
    let current = this.head;
    for (let i = 0; i < (length - k - 1); i++) {
      current = current.next;
    }
    return current.value;
  }
}

module.exports = LinkedList;
