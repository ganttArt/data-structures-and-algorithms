'use strict';

const arrayShift = require('./array-shift.js');

describe('Array Shift', () => {
  it('even length array', () => {
    let actual = arrayShift([2,4,6,8], 5);
    expect(actual).toEqual([2, 4, 5, 6, 8]);
  });
  it('odd length array', () => {
    let actual = arrayShift([4,8,15,23,42], 16);
    expect(actual).toEqual([4,8,15,16,23,42]);
    expect(actual).not.toEqual([4,8,16,15,23,42]);
  });
  it('empty array', () => {
    let actual = arrayShift([], 5);
    expect(actual).toEqual([5]);
  });
  it('single item array', () => {
    let actual = arrayShift([1], 2);
    expect(actual).toEqual([1,2]);
  });
});
