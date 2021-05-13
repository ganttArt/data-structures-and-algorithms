'use strict';

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

class K_aryTree {
  constructor(root = null){
    this.root = root;
  }
}

module.exports = {
  Node: Node,
  K_aryTree: K_aryTree
};
