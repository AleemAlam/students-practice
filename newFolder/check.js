function runProgram(input) {
  var input = input.split("\n");
  var testcase = +input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var size = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    var k = +input[line++];
    console.log(size, arr, k);
  }
}
// function pairK(size, arr, k) {
//   var left = 0;
//   var right = arr.length - 1;
//   var max = 0;
//   while (left < right) {
//     var sum = arr[left] + arr[right];
//     if (sum > max && sum < k) {
//       max = sum;
//       console.log(max);
//     } else if (sum < k) {
//       right--;
//     }
//     // }else if(sum>k ){
//     //     left++
//     else if (sum > k) {
//       console.log("-1");
//       break;
//     }

//     // console.log(max)
//     //  break;
//   }
// }
runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
