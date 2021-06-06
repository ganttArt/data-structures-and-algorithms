'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
  }

  getList() {
    if (!this.head) return 'no list';

    let current = this.head;

    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

class Hashmap {
  // Hashmaps need:
  // - a predetermined storage mechansim size
  // - which means we also need some type of storage mechanism -> array
  // - a constructor that creates a new storage mechanism when we make a new hashmap
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    // this hash function takes a string, splits it into an array,
    // grabs the char code for each character in the string array,
    // then multiples the accumulated set by a prime number,
    // then grab the remainder and this is our index placement
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  // set is meant to add (aka set) a new key/value pair in our hashmap
  // to do that we either:
  // a) create a new LL with a single item and put it in the proper idx spot
  // b) append to a pre-existing LL, since we have a collision
  set(key, val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
    }
  }

  get(key) {
    let hash = this.hash(key);
    let bucket = this.storage[hash];

    if (!this.storage[hash] || !bucket.head) return null;

    let current = bucket.head;

    while(current) {
      if (current.val[0] === key) return current.val[1];
      current = current.next;
    }
    return null;
  }

  contains(key) {
    let hash = this.hash(key);
    let bucket = this.storage[hash];

    if(!this.storage[hash] || !bucket.head) return false;

    let current = bucket.head;

    while(current) {
      if (current.val[0] === key) return true;
      current = current.next;
    }
    return false;
  }
}

// let hashmap = new Hashmap(3);

// hashmap.set('brian', 'nations');
// hashmap.set('alex', 'boberson');
// hashmap.set('alex', 'johnson');
// hashmap.set('alex', 'thompson');
// hashmap.set('xale', 'coolness');
// hashmap.set('sally', 'samsonite');
// hashmap.set('tom', 'tiller');

// console.log(hashmap);

module.exports = {
  Hashmap: Hashmap,
  Node: Node,
  LL: LL
};
