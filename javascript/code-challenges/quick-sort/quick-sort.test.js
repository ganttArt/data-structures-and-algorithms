'use strict';

const quickSort = require('./quick-sort');

describe('Quick sort tests', () => {
  it('Correctly sorts unsorted arrays', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let qs = quickSort(arr, 0, arr.length - 1);
    expect(qs).toEqual([4, 8, 15, 16, 23, 42]);

    expect(quickSort([20, 18, 12, 8, 5, -2], 0, 5)).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(quickSort([5, 12, 7, 5, 5, 7], 0, 5)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(quickSort([2, 3, 5, 7, 13, 11], 0, 5)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
