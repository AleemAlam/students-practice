var arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
// -1 -1 2
// -1 2 1
//  2 1 -1

function takeOutMaximum(arr, k) {
  var sum = 0;
  var max = -Infinity;
  for (var i = 0; i < k; i++) {
    sum += arr[i];
  }
  if (sum > max) {
    max = sum;
  }
  for (var j = k; j < arr.length; j++) {
    sum += arr[j];
    sum -= arr[j - k];
    if (sum > max) {
      max = sum;
    }
  }
  console.log(max);
}
takeOutMaximum(arr, 3);
