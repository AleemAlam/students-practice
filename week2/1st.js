function checkBothSum(arr, n) {
  for (var i = 1; i < arr.length; i++) {
    var leftSum = 0;
    for (var j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    var rightSum = 0;
    for (var k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    console.log(leftSum, rightSum);
    if (leftSum == rightSum) {
      return i + 1;
    }
  }
  return -1;
}
console.log(checkBothSum([3, 3, 5, 5, 1], 5));
