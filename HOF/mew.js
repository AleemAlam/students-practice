function check(arr, n, k) {
  var leftMost = null,
    rightMost = null,
    sum = 0,
    inDiv = [],
    rightOfL = -1,
    leftOfR = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % k != 0) {
      inDiv.push(i);
    }
    sum += arr[i];
  }
  if (inDiv.length == 0) {
    console.log(0);
    return;
  } else if (sum % k != 0) {
    console.log(1);
    return;
  } else if (sum % k == 0) {
    //find leftmost element indivisible by k
    leftMost = arr[inDiv[0]];
    //find rightmost element indivisible by k
    rightMost = arr[inDiv[inDiv.length - 1]];
    //which subarray is larger: rightOfL or leftOfR
    rightOfL = arr.length - 1 - inDiv[0];
    leftOfR = inDiv[inDiv.length - 1];
    // console.log(leftMost,rightMost)
    // console.log(leftOfR,rightOfL)
    if (leftOfR > rightOfL) {
      console.log(leftOfR);
      //   slider(arr, leftOfR);
    } else if (leftOfR <= rightOfL) {
      //   slider(arr, rightOfL);
      console.log(rightOfL);
    }
  }
}
var arr = [2, 4, 3, 5, 1, 7, 4, 7, 6];
var n = 9;
var k = 3;
check(arr, n, k);
