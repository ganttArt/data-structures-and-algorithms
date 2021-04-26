'use strict';

const LL = require('../lib/ll.js');

describe('Linked List', () => {
  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add a node to the list', () => {
    let list = new LL();

    list.append(1);
    expect(list.head.value).toEqual(1);

    list.append(2);
    expect(list.head.next.value).toEqual(2);

    list.append(3);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('should insert a new node at the list head', () => {
    let list = new LL();

    list.insert(1);
    expect(list.head.value).toEqual(1);

    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(1);
  });

  it('should return correct boolean value on includes method', () => {
    let list = new LL();

    expect(list.includes(1)).toEqual(false);
    list.insert(1);
    expect(list.includes(1)).toEqual(true);
    list.append(3);
    expect(list.includes(3)).toEqual(true);
    list.insert(45);
    expect(list.includes(45)).toEqual(true);
    expect(list.includes(100000)).toEqual(false);
    expect(list.includes(2)).toEqual(false);
  });

  it('should return the correct string representation of the linked list', () => {
    let list = new LL();
    expect(list.toString()).toEqual('NULL');

    list.append(1);
    expect(list.toString()).toEqual('{ 1 } -> NULL');

    list.append(2);
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> NULL');

    list.append(3);
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});

describe('Linked list insertBefore tests', () => {
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LL();
    list.append(1).append(2).append(3).append(4).append(5);

    list.insertBefore(3, 110);
    expect(list.head.next.next.value).toEqual(110);
    expect(list.head.next.next.next.value).toEqual(3);
    expect(list.head.next.next.next.next.value).toEqual(4);
  });

  it('Can successfully insert a node before the last node of a linked list', () => {
    let list = new LL();
    list.append(1).append(2).append(3).append(4).append(5);

    list.insertBefore(5, 120);
    expect(list.head.next.next.next.next.value).toEqual(120);
    expect(list.head.next.next.next.next.next.value).toEqual(5);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LL();
    list.append(1).append(2).append(3).append(4).append(5);

    list.insertBefore(1, 100);
    expect(list.head.value).toEqual(100);
    expect(list.head.next.value).toEqual(1);
  });

  it('Will return a string that indicates the value is not in the linked list if it is not', () => {
    let list = new LL();
    list.append(1).append(2).append(3).append(4).append(5);

    let insertionError = list.insertBefore(100, 300);
    expect(insertionError).toEqual('Value not in Linked List');
  });
});

describe('Linked List insertAfter', () => {
  it('Can successfully insert after a node at the start of the linked list', () => {
    let list = new LL();
    list.append(1).append(2).append(3);

    list.insertAfter(1, 6);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(6);
    expect(list.head.next.next.value).toEqual(2);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LL();
    list.append(1).append(2).append(3);

    list.insertAfter(2, 6);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(6);
    expect(list.head.next.next.next.value).toEqual(3);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LL();
    list.append(1).append(2);

    list.insertAfter(2, 6);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(6);
    expect(list.head.next.next.next).toEqual(null);
  });

  it('Will return a string that indicates the value is not in the linked list if it is not', () => {
    let list = new LL();
    list.append(1).append(2).append(3).append(4).append(5);

    let insertionError = list.insertAfter(100, 300);
    expect(insertionError).toEqual('Value not in Linked List');
  });
});
