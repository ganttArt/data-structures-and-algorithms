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
