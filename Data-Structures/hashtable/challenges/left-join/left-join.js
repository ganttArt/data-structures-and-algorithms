'use strict';

function leftJoin(hashmap1, hashmap2) {
  for (let i = 0; i < hashmap2.size; i++) {
    if (!(hashmap2.storage[i] === undefined || !hashmap2.storage[i].head)) {
      let current = hashmap2.storage[i].head;
      while (current) {
        hashmap1.set(current.val[0], current.val[1]);
        current = current.next;
      }
    }
  }
  return hashmap1;
}

module.exports = leftJoin;
