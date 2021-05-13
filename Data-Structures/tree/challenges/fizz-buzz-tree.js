'use strict';

const { K_aryTree } = require('../lib/k-aryTree');

const fizzBuzzTree = (tree) => {
  if (!tree.root) throw 'Error: Empty Tree';

  let fbt = new K_aryTree(tree.root);
  fbt.root.value = fizzBuzz(fbt.root.value);

  let _walk = node => {
    if (node.children.length > 0){
      for (let i = 0; i < node.children.length; i++) {
        _walk(node.children[i]);
      }
    }
    node.value = fizzBuzz(node.value);
  };
  _walk(fbt.root);

  return fbt;
};

const fizzBuzz = (number) => {
  if ((number % 5 === 0) && (number % 3 === 0)) return 'FizzBuzz';
  else if (number % 5 === 0) return 'Buzz';
  else if (number % 3 === 0) return 'Fizz';
  else return number.toString();
};

module.exports = fizzBuzzTree;
