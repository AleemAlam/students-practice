// const arr = [5, 4, 7, 32, 9, 11]; // n^2

// [5,4,7] [32,9,11]
// [5,4] [7] [32, 9] [11]
// [5] [4] [7] [32] [9] [11]
// [4,5] [7, 32] [9, 11] //
// [4,5, 7, 32] [9 , 11]
// [4,5,7,9,11,32]

// 3 4 5             1 7
// i                 j
function merge(left, right) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    // left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }

  left = left.splice(i); //[3, 4, 5]; 3 // []
  right = right.splice(j); //[1, 7]; // [7]
  return [...arr, ...left, ...right]; // [1,3,4,5,7]
}

function MergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let half = Math.ceil(arr.length / 2);
  let left = arr.splice(0, half);
  return merge(MergeSort(left), MergeSort(arr));
}

// const arr = [1, 2, 3, 67, 4, 6, 7, 8];
// console.log(arr.splice(0, 5));
const arr1 = [3, 4, 5];
const arr2 = [1, 7];
let i = 0;
let j = 0;
const ans = [];
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] > arr2[j]) {
    ans.push(arr2[j]);
    j++;
  } else {
    ans.push(arr1[i]);
    i++;
  }
}
console.log(i, j);
