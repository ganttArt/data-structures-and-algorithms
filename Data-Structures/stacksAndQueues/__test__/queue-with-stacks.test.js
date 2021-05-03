'use strict';

const Queue = require('../lib/queue-with-stacks');

describe('Queue data structure tests', () => {

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.s1.length).toEqual(0);
    expect(queue.s2.length).toEqual(0);
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('first');
    expect(queue.s1.length).toEqual(1);
    expect(queue.s1[0]).toEqual('first');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.s1.length).toEqual(2);
    expect(queue.s1[1]).toEqual('first');
    expect(queue.s1[0]).toEqual('second');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('first');
    expect(queue.dequeue()).toEqual('first');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.s1.length).toEqual(0);
    expect(queue.s2.length).toEqual(0);
  });

  it('Calling dequeue empty queue raises exception', () => {
    let queue = new Queue();

    try { queue.dequeue(); } catch (e) { expect(e).toEqual('Error: Empty Queue');}

  });
});
