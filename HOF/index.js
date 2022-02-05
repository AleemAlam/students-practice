var k = 3;
var len = 4;
var arr = [2, 4, 3, 5, 1];
var count = 0;
var sum = 0;

// 2 4 3 5 1
// 2 4 3 5 = 14
// 4 3 5 1 = 14 - 2 +1 = 13

for (var i = 0; i < len; i++) {
  sum += arr[i];
}
for (var i = len; i < arr.length; i++) {
  sum -= arr[i - len];
  sum += arr[i];
}

console.log(sum);
// for (var i = 0; i < k; i++) {
//   sum += arr[i];
// }
// if (sum % k != 0) {
//   count++;
// }
