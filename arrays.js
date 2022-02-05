// function isPrime(x) {
//   for (var i = 2; i < x; i++) {
//     if (x % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printOdd(a) {
//   for (var i = 1; i < a; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// }

// var x = 13;//13
// if (isPrime(x)) {
//   printOdd(x);
// }

// console.log(isPrime(13));
// console.log(isPrime(77));
// console.log(isPrime(105));

// function runProgram(input) {
//   input = input.split("\n");
//   var [N, M] = input[0].split(" ").map(Number);
//   var line = 1;
//   var arr = [];

//   for (var i = 0; i < N; i++) {
//     arr.push(input[line].split(" ").map(Number));
//     line++;
//   }
//   oddproduct(N, M, arr);
// }
// function oddproduct(N, M, arr) {
//   var M = arr[0].length;
//   for (var r = 0; r < M; r++) {
//     var product = 1;
//     for (var c = 0; c < N; c++) {
//       if (arr[c][r] % 2 != 0) {
//         product *= arr[c][r];
//       }
//     }
//     console.log(product);
//   }
// }
// if (process.env.LOGNAME === "ellu") {
//   runProgram(`3 4
// 10 5 12 11
// 7 5 2 10
// 3 10 2 4`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// function runProgram(input) {
//   var input = input.trim().split("\n");
//   var testCase = +input[0];
//   var line = 1;

//   for (var i = 0; i < testCase; i++) {
//     var num = +input[line++];
//     happy(num);
//   }
// }

// function happy(num) {
//   var sq = Infinity;
//   if (sq > 1) {
//     while (num > 0) {
//       var rem = num % 10;
//       sq += Math.pow(rem, 2);
//       num = Math.floor(num / 10);
//     }
//     return sq;
//   } else if (sq == 1) {
//     console.log("true");
//   } else if (sq < 1) {
//     console.log("false");
//   }
// }

// if (process.env.LOGNAME === "ellu") {
//   runProgram(`735262703`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// function runProgram(input) {
//   input = input.split("\n");
//   //   console.log(input)
//   var [N, M] = input[0].split(" ").map(Number);
//   // console.log(N, M)

//   var matrix = [];

//   for (var i = 0; i < N; i++) {
//     matrix.push(input[i + 1].split(" ").map(Number));
//   }
//   // console.log(N, M, matrix);
//   productArrCol(N, M, matrix);
//   //  console.log(product)
// }

// function productArrCol(N, M, matrix) {
//   for (var c = 0; c < M; c++) {
//     var product = 1;
//     for (var r = 0; r < N; r++) {
//       if (matrix[r][c] % 2 == 1) {
//         product = product * matrix[r][c];
//       }
//     }
//     console.log(product);
//   }
// }

// if (process.env.LOGNAME === "ellu") {
//   runProgram(`3 4
//   10 5 12 11
//   7 5 2 10
//   3 10 2 4`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// function runProgram(input) {
//   // Write code here
//   input = input.split("\n");
//   var T = +input[0];
//   var line = 1;
//   for (var i = 0; i < T; i++) {
//     var num = input[line];
//     line++;
//     console.log(isItHappy(num));
//   }
// }

// function runProgram(input) {
//   // Write code here
//   var input = input.split("\n");
//   var T = +input[0];
//   var line = 1;
//   for (var i = 0; i < T; i++) {
//     var [N, M] = input[line].trim().split(" ").map(Number);
//     line++;
//     var mat = [];
//     for (var j = 0; j < N; j++) {
//       mat.push(input[line].trim().split(" ").map(Number));
//       line++;
//     }
//     spiral(N, M, mat);
//   }
// }

// function spiral(N, M, mat) {
//   var minrow = 0;
//   var mincol = 0;
//   var maxrow = N - 1;
//   var maxcol = M - 1;
//   var count = 0;
//   var totalcount = N * M;
//   var ans = "";

//   while (count < totalcount) {
//     for (var i = maxrow; i >= minrow && count < totalcount; i--) {
//       ans += mat[i][minrow] + " ";
//       count++;
//     }
//     console.log(ans);
//     mincol++;
//     for (var j = mincol; j <= maxcol && count < totalcount; j++) {
//       ans += mat[minrow][j] + " ";
//       count++;
//     }
//     console.log(ans);
//     minrow++;
//     for (var k = minrow; k <= maxrow && count < totalcount; k++) {
//       ans += mat[k][maxcol] + " ";
//       count++;
//     }
//     console.log(ans);
//     maxcol--;
//     for (var l = maxcol; l >= mincol && count < totalcount; l--) {
//       ans += mat[maxcol][l] + " ";
//       count++;
//     }
//     console.log(ans);
//     maxrow--;
//   }
//   console.log(ans);
// }

// if (process.env.LOGNAME === "ellu") {
//   runProgram(`1
//   3 6
//   7 3 9 3 5 8
//   3 9 3 3 9 5
//   2 6 3 9 1 8`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
