function bubbleSort(arr, n) {
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
var arr = [4, 67, 2, 5, 7, 89, 4, 3];
bubbleSort(arr, arr.length);
console.log(arr);
