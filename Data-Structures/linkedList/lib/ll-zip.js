'use strict';

function zipLists(list1, list2) {
  if (!list1.head && !list2.head) {
    throw 'Error: Both linked lists are empty.';
  } else if (!list1.head) {
    return list2;
  } else if (!list2.head) {
    return list1;
  }
  return null;
}

module.exports = zipLists;
