'use strict';

const { Node, K_aryTree } = require('../lib/k-aryTree');
const fizzBuzzTree = require('../challenges/fizz-buzz-tree');

describe('FizzBuzzTree Function', () => {
  it('Returns a new tree in the fizzbuzz format', () => {
    const node = new Node(5);
    node.children.push(new Node(3));
    node.children.push(new Node(10));
    node.children.push(new Node(15));
    node.children[0].children.push(new Node(1));
    node.children[0].children.push(new Node(20));
    node.children[1].children.push(new Node(30));
    const kt = new K_aryTree(node);
    let fbt = fizzBuzzTree(kt);
    expect(fbt.root.value).toEqual('Buzz');
    expect(fbt.root.children[0].value).toEqual('Fizz');
    expect(fbt.root.children[1].value).toEqual('Buzz');
    expect(fbt.root.children[2].value).toEqual('FizzBuzz');
    expect(fbt.root.children[0].children[0].value).toEqual('1');
    expect(fbt.root.children[0].children[1].value).toEqual('Buzz');
    expect(fbt.root.children[1].children[0].value).toEqual('FizzBuzz');
    expect(fbt.root.children[2].children.length).toEqual(0);
  });

  it('Throws an error when an empty tree is passed into the function', () => {
    let kt = new K_aryTree();
    try {
      fizzBuzzTree(kt);
    } catch (e) {
      expect(e).toEqual('Error: Empty Tree');
    }
  });
});
