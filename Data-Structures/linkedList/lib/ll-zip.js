'use strict';

function zipLists(list1, list2) {
  if (!list1.head && !list2.head) {
    throw 'Error: Both linked lists are empty.';
  } else if (!list1.head) {
    return list2;
  } else if (!list2.head) {
    return list1;
  }
  console.log('precurrent');
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1) {
    if (current2) {
      // attempt 2
      let list1temp = current1.next;
      current1.next = current2;
      current2 = current2.next;
      current1.next.next = list1temp;
      current1 = current1.next.next;

      // // attempt 1
      // let nextOne = current1.next;
      // let temp = current2;
      // current1.next = temp;
      // temp.next = nextOne;
      // current2 = current2.next;
      // current1 = current1.next.next;
    }
    else { break; }
  }
  return list1;
}

module.exports = zipLists;
