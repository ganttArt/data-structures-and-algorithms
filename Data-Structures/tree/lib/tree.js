'use strict';

class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }

  preOrder() {
    // root, left, right
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  inOrder() {
    // left, root, right
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  postOrder() {
    // left, right, root
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }

  findMaximumValue() {
    if (!this.root) throw 'Error: Empty tree';
    let max = this.root.value;

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      if (node.value > max) max = node.value;
    };

    _walk(this.root);
    return max;
  }
}

class BinarySearchTree {
  // takes in the root of a sorted bt
  constructor(root = null){
    this.root = root;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return `${value} added.`;
    }

    let current = this.root;
    while (current) {
      if ((current.value > value) && (current.left === null)) {
        current.left = new Node(value);
        return `${value} added.`;
      }
      if (current.value > value) {
        current = current.left;
        continue;
      }
      if ((current.value < value) && (current.right === null)) {
        current.right = new Node(value);
        return `${value} added.`;
      }
      if (current.value < value) {
        current = current.right;
        continue;
      }
    }
  }

  contains(value) {
    let inBST = false;

    let _walk = node => {
      if (node.value === value) inBST = true;
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return inBST;
  }
}

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree
};
