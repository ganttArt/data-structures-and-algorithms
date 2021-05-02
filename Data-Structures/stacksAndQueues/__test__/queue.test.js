'use strict';

const Queue = require('../lib/queue');

describe('Queue data structure tests', () => {

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.length).toEqual(0);
    expect(queue.next).toEqual(null);
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('first');
    expect(queue.length).toEqual(1);
    expect(queue[0]).toEqual('first');
    expect(queue.next).toEqual(0);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('first').enqueue('second');
    expect(queue.length).toEqual(2);
    expect(queue[0]).toEqual('first');
    expect(queue[1]).toEqual('second');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('first').enqueue('second');
    expect(queue.dequeue()).toEqual('first');
    expect(queue.length).toEqual(1);
    expect(queue.next).toEqual(1);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue('first').enqueue('second').enqueue('third');
    expect(queue.peek()).toEqual('first');
    queue.dequeue();
    expect(queue.peek()).toEqual('second');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('first').enqueue('second').enqueue('third');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.length).toEqual(0);
    expect(queue.next).toEqual(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();

    try { queue.dequeue(); } catch (e) { expect(e).toEqual('Error: empty queue');}

    try { queue.peek(); } catch(e) {expect(e).toEqual('Error: empty queue');}
  });

  it('Returns the correct boolean value when isEmpty is called', () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue('first').enqueue('second');
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });
});
