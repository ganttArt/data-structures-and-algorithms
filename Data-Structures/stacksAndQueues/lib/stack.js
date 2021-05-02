'use strict';

// STACK - FILO (first in last out)
function Stack() {
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this[this.length++] = value;
  return this;
};

Stack.prototype.pop = function() {
  if (this.length === 0) throw 'Error: Empty Stack';

  let result = this[--this.length];

  delete this[this.length];
  return result;
};

Stack.prototype.peek = function() {
  if (this.length === 0) throw 'Error: Empty Stack';
  return this[this.length - 1];
};

Stack.prototype.isEmpty = function() {
  return this.length === 0 ? true : false;
};

module.exports = Stack;
