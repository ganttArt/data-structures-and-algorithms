'use strict';

const arrayBinarySearch = require('./array-binary-search.js');

describe('Array Binary Search', () => {

  it('should find the index of a value that is in the array', () => {
    let actual = arrayBinarySearch([4,8,15,16,23,42], 15);
    expect(actual).toEqual(2);
  });

  it('should return -1 when the value is not in the array', () => {
    let actual = arrayBinarySearch([11,22,33,44,55,66,77], 90);
    expect(actual).toEqual(-1);
    let actual2 = arrayBinarySearch([1, 2, 3, 5, 6, 7], 4);
    expect(actual2).toEqual(-1);
  });

  it('should return -1 on edge cases', () => {
    let actual = arrayBinarySearch([], 5);
    expect(actual).toEqual(-1);
    let actual2 = arrayBinarySearch([1], 5);
    expect(actual2).toEqual(-1);
  });

});
