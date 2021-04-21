'use strict';

function bsHelper(sortedArray, target, start, end) {
  let middle = Math.floor((start + end) / 2);

  if (target === sortedArray[start]){
    return start;
  }
  else if (target === sortedArray[middle]) {
    return middle;
  }
  else if (target === sortedArray[end]) {
    return end;
  }
  else if ((middle === end) || (middle === start)) {
    return -1;
  }
  else if (sortedArray[middle] < target) {
    return bsHelper(sortedArray, target, middle, end);
  }
  else if (sortedArray[middle] > target) {
    return bsHelper(sortedArray, target, start, middle);
  }
}

function binarySearch(sortedArray, target) {
  const arrayLength = sortedArray.length;
  if ((arrayLength === 0) ||
      (target < sortedArray[0]) ||
      (target > sortedArray[arrayLength - 1])) {
    return -1;
  } else {
    return bsHelper(sortedArray, target, 0, (arrayLength - 1));
  }
}

module.exports = binarySearch;
