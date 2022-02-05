var arr = [1, 2, 4, 5, 7, 8, 9, 34, 70];

function binarySearch(arr, l, r, s) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == s) {
      return mid;
    }
    if (arr[mid] > s) {
      return binarySearch(arr, l, mid - 1, s);
    }
    return binarySearch(arr, mid + 1, r, s);
  }
  return -1;
}

console.log(binarySearch(arr, 0, arr.length - 1, 34));
