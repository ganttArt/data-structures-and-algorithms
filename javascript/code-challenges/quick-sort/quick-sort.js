'use strict';

function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

module.exports = quickSort;

// Implementation following the pseudocode provided is causing errors.
// Successful implementation with help from https://www.guru99.com/quicksort-in-javascript.html
