// function runProgram(input) {
//   input = input.trim().split("\n");
//   var testCase = +input[0];
//   var row = 1;
//   for (var i = 0; i < testCase; i++) {
//     var num = Number(input[row++]);
//     while (num >= 10) {
//       var sum = 0;
//       var str = num.toString();
//       for (var j = 0; j < str.length; j++) {
//         sum += Number(str[j]) ** 2;
//       }
//       num = sum;
//     }
//     if (num == 1) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// }

// runProgram(`3
// 19
// 2
// 312082396`);

// var arr = [1, 2, 7];
// // 1 2 4
// // 5 6 7
// {
//   name: "Aleem";
// }
// var newArr = [];
// var sum = 0;
// for (key in arr) {
//   newArr.push(arr[key]);
// }
// i = 0;
// var maxArr = [];
// while (i < 3) {
//   var max = maxEle(newArr);
//   var newArr = removeElement(newArr, max);
//   maxArr.push(max);
//   i++;
// }
// console.log(maxArr.join(" "));

// function maxEle(arr) {
//   var max = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// function removeElement(arr, max) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] != max) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

var Person = {
    name:"Aleem",
    age:23,
    walk:function(){
        console.log(walk)
    }

}
var arr = [1,2,3,4,5,6]
