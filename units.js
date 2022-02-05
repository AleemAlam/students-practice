// function unitsConsumed(n) {
//   var units = 0;
//   var remaining = n - 80;
//   if (remaining > 150) {
//     units += 50;
//     remaining -= 150;
//     if (remaining > 500) {
//       units += 100;
//       remaining -= 500;
//       console.log(units + remaining / 10);
//     } else {
//       console.log(units + remaining / 5);
//     }
//   } else {
//     console.log(remaining / 3);
//   }
// }
// console.log(unitsConsumed(230));
// function equalTo42(size, arr) {
//   //write code here
//   for (var i = 0; i <= arr.length; i++) {
//     if (arr[i] == 42) {
//       console.log("Yes");
//     } else {
//       console.log("No");
//     }
//     break;
//   }
// }

// var arr = [1, 2, 3, 4, 4, 4, 3, 2, 3, 4, 5, 4];
// var obj = {};
// obj["b"] = 2;
// console.log(obj);
// for (var i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// console.log(obj);
// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var N = matrix.length;
// var ans = [];
// for (var i = N - 1; i >= 0; i--) {
//   ans.push(matrix[i][0]);
// }
// for (i = 1; i <= N - 1; i++) {
//   ans.push(matrix[0][i]);
// }
// for (i = 1; i <= N - 1; i++) {
//   ans.push(matrix[i][N - 1]);
// }
// for (i = N - 2; i > 0; i--) {
//   ans.push(matrix[N - 1][i]);
// }
// console.log(ans.join(" "));
// nTraversal(matrix);

// var arr = [0, 2, 0, 6, 9];
// var obj = {
//   0: 2,
//   2: 1,
//   6: 1,
//   9: 1,
// };

// function Array3D(N, M, K, array) {
//write code here

//   var output = "";

//   for (var i = 0; i < M; i++) {
//     for (var j = 0; j < K; j++) {
//       for (var k = 0; k < N; k++) {
//         output += array[i][j][k] + " ";
//       }
//     }
//   }

//   console.log(output);
// }
// var n = 2,
//   m = 2,
//   k = 2;
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// Array3D(n, m, k, arr);

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// 00
// 01 10
// 02 11 20
// 03 12 21 30
// 13 22 31
// 23 32
// 33

// for(var i = 0; i < n;i++){
//   for(var j = 0; j < m;i++){

//   }
// }

// while(num>=10){

// }

// if(num==1){
//   happy
// }
// else{
//   unhappy
// }

function isItHappy(ans) {
  console.log(ans);
  var sum = 0;
  var flag = false;
  for (var i = 0; i < ans.length; i++) {
    sum += ans[i] * ans[i];
    console.log(sum);
    if (sum == 1) {
      return true;
    } else if (sum > 1) {
      return isItHappy(sum);
    } else {
      return false;
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var testCases = +input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    //console.log(input[line++].trim().split(""));
    var ans = input[line++].trim().split("").map(Number);
    console.log(isItHappy(ans));
  }
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  19
  2
  312082396
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
