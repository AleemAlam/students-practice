function twoSortedArrays(size, arr1, arr2) {
  var i = 0;
  var j = arr1.length - 1;
  var count = 0;
  while (i < size && j >= 0) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j--;
    } else {
      count++;
      i++;
      j--;
    }
  }
  console.log(count);
}
var arr = [1, 2, 2, 3, 4, 5];
var arr2 = [4, 4, 3, 2, 1, 1];

console.log(twoSortedArrays(6, arr, arr2));
