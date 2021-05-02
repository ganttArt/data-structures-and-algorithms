'use strict';

const Stack = require('../lib/stack');

describe('Stack data structure test', () => {

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.length).toEqual(0);
  });

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push('first');
    expect(stack[0]).toEqual('first');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push('first').push('second');
    expect(stack[0]).toEqual('first');
    expect(stack[1]).toEqual('second');
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push('first').push('second');
    expect(stack.pop()).toEqual('second');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push('first').push('second');
    expect(stack.pop()).toEqual('second');
    expect(stack.length).toEqual(1);
    expect(stack.pop()).toEqual('first');
    expect(stack.length).toEqual(0);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push('first').push('second');
    expect(stack.peek()).toEqual('second');
    stack.pop();
    expect(stack.peek()).toEqual('first');
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    try {
      stack.pop();
    } catch (e) {
      expect(e).toEqual('Error: Empty Stack');
    }

    try {
      stack.peek();
    } catch (e) {
      expect(e).toEqual('Error: Empty Stack');
    }
  });

  it('Returns the correct boolean value on isEmpty method', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push('first').push('second');
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
});
