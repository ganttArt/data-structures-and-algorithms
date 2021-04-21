'use strict';

function insertShiftArray(array, value) {
  if (array.length === 0) {
    return [value];
  } else if (array.length === 1) {
    array.push(value);
    return array;
  }

  const middleIndex = Math.ceil(array.length / 2);
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (i === middleIndex) {
      newArray.push(value);
    }
    newArray.push(element);
  }
  return newArray;
}

module.exports = insertShiftArray;
