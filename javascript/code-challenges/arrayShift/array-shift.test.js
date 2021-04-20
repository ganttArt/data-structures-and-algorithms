'use strict';

const arrayShift = require('./array-shift.js');

describe('Array Shift', () => {
  it('even length array, success', () => {
    expect(arrayShift([2,4,6,8], 5).toBe([2,4,5,6,8]));
  });
});
