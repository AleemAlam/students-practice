// var replace = " du";
// var result = "";
// var flag = false;
// for (var i = 0; i < str.length; i++) {
//   var substr = "";
//   for (var j = i; j < i + replace.length; j++) {
//     substr += str[j];
//   }
//   if (replace == substr && flag == false) {
//     result += "smaller";
//     i += replace.length - 1;
//     flag = true;
//   } else {
//     result += str[i];
//   }
// }
// var str = "The quick.";
// var arr = []
// for (var i = 0; i < str.length; i++) {
// }
// // console.log(result);
// 1 2 3 4
// var str = ""
// {
// str+= arr[i]+" "}
// console.log(str)

// var num = 8;
// var reverseBinary = "";
// while (num != 0) {
//   reverseBinary += num % 2;

//   num = Math.floor(num / 2);
// }
// console.log(reverseBinary);

// 0 1
// 0 1 2 3 4 5 6 7 8 9
// 0 1 3 4 5 6 7 8
// 0 1 2 3 4 5 6 7 8 9 A B C D E F
// // 1212121212
// //
// function traverse2dArray(N, M, matrix) {
//   //write code here
//   var line = "";
//   for (var i = 0; i < M; i++) {
//     for (var j = N - 1; j >= 0; j--) {
//       line = line + matrix[j][i] + " ";
//     }
//   }
//   console.log(line);
// }
// traverse2dArray(4, 3, [
//   [1, 8, 9],
//   [2, 7, 10],
//   [3, 6, 11],
//   [4, 5, 12],
// ]);

//   0 1 2
// 0 1 2 3
// 1 4 5 6
// 2 7 8 9

// 00
// 11
// 22

// i j
// 0 2
// 1 1
// 2 0

for (var i = 0; i < 3; i++) {
  for (var j = 3 - 1; j >= 0; j--) {
    console.log(arr[i][j]);
  }
}
