'use strict';

const LL = require('../lib/ll.js');
const zipLists = require('../lib/ll-zip');

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

describe('Linked List length method and kthFromEnd', () => {
  it('Will return the correct length of a linked list', () => {
    let list = new LL();
    expect(list.getLength()).toEqual(0);

    list.append(1);
    expect(list.getLength()).toEqual(1);

    list.append(2);
    expect(list.getLength()).toEqual(2);

    list.append(5);
    expect(list.getLength()).toEqual(3);
  });

  it('Will return the correct value for n', () => {
    let list = new LL();
    list.append(100);
    expect(list.kthFromEnd(1)).toEqual(100);

    list.append(3).append(8).append(2);
    expect(list.kthFromEnd(0)).toEqual(2);
    expect(list.kthFromEnd(2)).toEqual(3);
    expect(list.kthFromEnd(4)).toEqual(100);
  });

  it('Will return an error message when k > length of the linked list', () => {
    let list = new LL();
    list.append(1).append(3).append(8).append(2);
    try {
      list.kthFromEnd(6);
    } catch (e) {expect(e).toEqual('Error: k > length of linked list');}
  });

  it('Will return an error where k is not a positive integer', () => {
    let list = new LL();
    list.append(1).append(3).append(8).append(2);

    try {
      list.kthFromEnd(-4);
    } catch (e) {expect(e).toEqual('Error: k cannot be a negative number.')};
  });
});

describe('Zip two linked lists', () => {
  it('Zips two linked lists of the same length', () => {
    let list1 = new LL();
    let list2 = new LL();
    list1.append(9);
    list2.append(1);

    let zipList = zipLists(list1, list2);
    expect(zipList.head.value).toEqual(9);
    expect(zipList.head.next.value).toEqual(1);
    expect(zipList.head.next.next).toEqual(null);

    list1.append(8).append(7);
    list2.append(2).append(3);
    zipList = zipLists(list1, list2);

    let expected = [9, 1, 8, 2, 7, 3];
    let currentIndex = 0;
    let current = zipList.head;
    while (current){
      expect(current.value).toEqual(expected[currentIndex]);
      currentIndex += 1;
      current = current.next;
    }
  });

  it('Zips two linked lists where list2 length > list1 length', () => {
    let list1 = new LL();
    let list2 = new LL();
    list1.append(9).append(8);
    list2.append(1).append(2).append(3);
    let zipList = zipLists(list1, list2);

    let expected = [9, 1, 8, 2, 3];
    let currentIndex = 0;
    let current = zipList.head;
    while (current){
      expect(current.value).toEqual(expected[currentIndex]);
      currentIndex += 1;
      current = current.next;
    }
  });

  it('Zips two linked lists where list2 length < list1 length', () => {
    let list1 = new LL();
    let list2 = new LL();
    list1.append(9).append(8).append(7);
    list2.append(1).append(2);
    let zipList = zipLists(list1, list2);

    let expected = [9, 1, 8, 2, 7];
    let currentIndex = 0;
    let current = zipList.head;
    while (current){
      expect(current.value).toEqual(expected[currentIndex]);
      currentIndex += 1;
      current = current.next;
    }
  });

  it('Zips two linked lists where only list one is empty', () => {
    let list1 = new LL();
    let list2 = new LL();
    list2.append(1).append(2);
    let zipList = zipLists(list1, list2);

    let expected = [1, 2];
    let currentIndex = 0;
    let current = zipList.head;
    while (current){
      expect(current.value).toEqual(expected[currentIndex]);
      currentIndex += 1;
      current = current.next;
    }
  });

  it('Zips two linked lists where only list two is empty', () => {
    let list1 = new LL();
    let list2 = new LL();
    list1.append(9).append(8);
    let zipList = zipLists(list1, list2);

    let expected = [9, 8];
    let currentIndex = 0;
    let current = zipList.head;
    while (current){
      expect(current.value).toEqual(expected[currentIndex]);
      currentIndex += 1;
      current = current.next;
    }
  });

  it('Throws an error when both lists are empty', () => {
    let list1 = new LL();
    let list2 = new LL();

    try {
      zipLists(list1, list2);
    } catch (e) {
      expect(e).toEqual('Error: Both linked lists are empty.');
    }
  });
});
