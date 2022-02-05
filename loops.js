// console.log(1 % 10);
// 3
// 6
// 18
// 72
// 360
// 2160
// 15120
// 120960
// 1088640
// 10886400
// while (i <= 10) {
//   num = num * i; // 3 *2 = 6, 6*3 = 18
//   console.log(num);
//   i++;
// }
// n   i = ans
// 3 * 1 = 3
// 3 * 2 = 6
// 6 * 3 = 18
// 18 * 4 = 72
// 72 * 5 = 360

// function loop1toN(num) { // 5
//   while (num > 0) { // true
//     console.log(num); // 5
//     num--;
//   }

//   console.log(sum); //
// }

// loop1toN(5);
// function oddSumBelowN(num) {
//   var a = 1;
//   var sum = 0;
//   while (a <= num) {
//     if (a % 2 == 1) {
//       sum = sum + a;
//     }
//     a++;
//   }
//   console.log(sum);
// }
// oddSumBelowN(18);

// var a = 11;
// var b = 12;
// var c = 10;

// if (a > b && a < c) {
//   console.log(a);
// }
// if (c > a && c < b) {
//   console.log(c);
// } else {
//   console.log(b);
// }

// var arr = [12, 24, 36, 12];
// function sum(arr) {
//   //sum all the elements
//   var arrSum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     arrSum += arr[i];
//   }
//   return arrSum
// }

// function equalTo42(size, arr) {
//   //write code here
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 42) {
//       console.log("Yes");
//       return;
//     }
//   }
//   console.log("No");
// }
// equalTo42(5, arr);

// var str = " Aleem ";
// var nothing = str.split(" "); //
// console.log(nothing);
// str[0] = "";
// var newStr = str.substring(1);
// var arr = [1, 2, 3, 4, 5];
// arr[1] = 27;
// console.log(str, arr);
// console.log(newStr);

// var resultArr = [];
// for (var i = 0; i < str.length; i++) {
//   //(condition)
//   //
// }
// var str = " its a standup ";
// function replace(substring, newSubstring) {
//   var name = "Aleem"
//   // Aleem=> l to a
//   // Aleem=> em to ii

// }

// var smaller= "abcdefghijklmnopqrstuvwxyz"
// var upper =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var arr = ["AA", "BB"]

// for sum = arr // return sum
// var a = 99966754;
// var b = 34578745;
// function twoSum(arr) {
//   var sum = a + b;
//   return sum;
// }
// var total = twoSum(a, b);
// console.log(total / 10);

// for average = sum , n

// var str = "The quick brown fox jumps over the lazy dog";

// console.log(arr.join(" "));

function symmetry(N, arr) {
  function hori(N, arr) {
    var i = 0;
    var j = N - 1;
    while (i < j) {
      for (var k = 0; k < arr.length; k++) {
        if (arr[i][k] !== arr[j][k]) {
          return false;
        }
      }
      i++;
      j--;
    }
    return true;
  }

  function verti(N, arr) {
    var i = 0;
    var j = arr[0].length - 1;
    while (i < j) {
      for (var k = 0; k < arr.length; k++) {
        console.log(arr[k][i], arr[k][j]);
        if (arr[k][i] !== arr[k][j]) {
          return false;
        }
      }
      i++;
      j--;
    }
    return true;
  }
  console.log(verti(N, arr));

  if (hori(N, arr) === true && verti(N, arr) === true) {
    console.log("BOTH");
  } else if (hori(N, arr) === true && verti(N, arr) === false) {
    console.log("HORIZONTAL");
  } else if (hori(N, arr) === false && verti(N, arr) === true) {
    console.log("VERTICAL");
  } else {
    console.log("NO");
  }
}

function runProgram(input) {
  // Write code here

  input = input.split("\n");

  var testCases = +input[0];
  var line = 1;

  for (var i = 0; i < testCases; i++) {
    var size = +input[line];
    line++;
    var mat = [];

    for (var j = 0; j < size; j++) {
      mat.push(input[line].split(" "));
      line++;
    }
    symmetry(size, mat);
  }
}

runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*
`);
