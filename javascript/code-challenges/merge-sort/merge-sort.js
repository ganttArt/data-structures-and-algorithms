'use strict';

function mergeSort(arr) {
  let len = arr.length;

  if (len > 1) {
    let mid = Math.ceil(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
  } else {
    return arr;
  }
}

// wasn't sure how to fully implement the psuedo code so I went to dev.to and got some help
// implementation imported from https://dev.to/mcfrank16/understanding-merge-sort-in-javascript-4cne
const merge = (left, right) => {
  const resArr = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    left[leftIdx] < right[rightIdx]
      ? resArr.push(left[leftIdx++])
      : resArr.push(right[rightIdx++]);
  }
  return [...resArr, ...left.slice(leftIdx), ...right.slice(rightIdx)];
};

// /*
// function merge(left, right, arr) {
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while ((i < left.length) && (j < right.length)) {
//     if (left[i] <= right[j]){
//       arr[k] = left[i];
//       i++;
//     } else {
//       arr[k] = right[j];
//       j++;
//     }
//     k++;
//   }

//   // if (i === left.length) {
//   // } else {
//   // } not sure what it wants me to do here in the pseudo code

//   return arr;
// }
// */

module.exports = mergeSort;
