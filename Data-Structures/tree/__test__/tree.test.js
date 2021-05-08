'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../lib/tree');

describe('Tree Data Structure tests', () => {
  it('Can successfully instantiate an empty tree', () => {
    let bt = new BinaryTree();
    expect(bt.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let node = new Node(1);
    let bt = new BinaryTree(node);
    expect(node.value).toEqual(1);
    expect(node.left).toEqual(null);
    expect(node.right).toEqual(null);
    expect(bt.root).toEqual(node);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let node = new Node(1);
    let bt = new BinaryTree(node);
    node.left = new Node(2);
    node.right = new Node(3);

    expect(bt.root.value).toEqual(1);
    expect(bt.root.left.value).toEqual(2);
    expect(bt.root.right.value).toEqual(3);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let node = new Node(1);
    node.left = new Node(2);
    node.right = new Node(3);
    node.left.left = new Node(4);
    node.left.right = new Node(5);
    let bt = new BinaryTree(node);
    let expected = [1, 2, 4, 5, 3];
    expect(bt.preOrder()).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let node = new Node(1);
    node.left = new Node(2);
    node.right = new Node(3);
    node.left.left = new Node(4);
    node.left.right = new Node(5);
    let bt = new BinaryTree(node);
    let expected = [4, 2, 5, 1, 3];
    expect(bt.inOrder()).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let node = new Node(1);
    node.left = new Node(2);
    node.right = new Node(3);
    node.left.left = new Node(4);
    node.left.right = new Node(5);
    let bt = new BinaryTree(node);
    let expected = [4, 5, 2, 3, 1];
    expect(bt.postOrder()).toEqual(expected);
  });
});

describe('BST data structure testing', () => {
  it('Can successfully instantiate an empty binary search tree', () => {
    let bst = new BinarySearchTree();
    expect(bst.root).toEqual(null);
  });

  it('Can successfully add values to the BST', () => {
    let bst = new BinarySearchTree();
    bst.add(50);
    bst.add(25);
    bst.add(75);
    bst.add(35);
    bst.add(13);
    bst.add(99);
    bst.add(65);
    console.log(bst);
    expect(bst.root.value).toEqual(50);
    expect(bst.root.left.value).toEqual(25);
    expect(bst.root.left.left.value).toEqual(13);
    expect(bst.root.left.right.value).toEqual(35);
    expect(bst.root.right.value).toEqual(75);
    expect(bst.root.right.left.value).toEqual(65);
    expect(bst.root.right.right.value).toEqual(99);
  });

  it('Will successfully return the correct boolean value when the contains method is called', () => {
    let bst = new BinarySearchTree();
    let expected = [50, 25, 75, 35, 13, 99, 65];
    let unexpected = [51, 24, 77, 34, 12, 100, 64];
    expected.forEach(number => {
      bst.add(number);
    });
    expected.forEach(number => {
      expect(bst.contains(number)).toEqual(true);
    });
    unexpected.forEach(number => {
      expect(bst.contains(number)).toEqual(false);
    });
  });
});
