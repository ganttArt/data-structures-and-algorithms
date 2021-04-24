'use strict';

const LinkedList = require('./lib/ll.js');

let ll = new LinkedList();

console.log('empty list', ll);

ll.append(10);
ll.append(11);
ll.append(12);
ll.append(13);

ll.insert(1);
ll.insert(2);

console.log(ll.toString());
