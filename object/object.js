// var arr = [1, 2, 3, 4, 5, 6];
// arr.push(100);
// console.log(arr);
// var Person = {
//   name: "Aleem",
//   age: 23,
//   walk: function () {
//     console.log("walking");
//     return 10;
//   },
//   changeName: function (str) {
//     this.name = str;
//     console.log(this);
//   },
// };

// // age
// Person[names] = 24;
// // Person["age"] = 24
// var temp;
// temp = 100;
// Person["school"] = "ABC School";
// console.log(Person);

// var str = "aaagcjjjjjjjjjaaa";
// var obj = {};
// for (var i = 0; i < str.length; i++) {
//   // obj[str[i]]
//   if (obj[str[i]] == undefined) {
//     obj[str[i]] = 1;
//   } else {
//     obj[str[i]] = obj[str[i]] + 1;
//   }
// }
// var max = 0;
// var maxKey;
// console.log(obj);
// for (key in obj) {
//   if (max < obj[key]) {
//     max = obj[key]; // 9
//     maxKey = key; // j
//   }
// }
// console.log(maxKey, obj[maxKey]);

// 5;
// aabbc;
// 3;
// var str2 = "aaababc";
// var obj = { a: 0, b: 2, c: 1 };
// var flag = true;
// for (var i = 0; i < str2.length; i++) {
//   //obj[a]
//   if (obj[str2[i]]) {
//     obj[str2] -= 1;
//   } else {
//     flag = false;
//     break;
//   }
// }
// console.log(flag);
// if (arr[i] + arr[j] == B) {
//   return [i, j];
// }

// return [-1, -1];

// function checkSum() {
//   if (2 + 2 == 5) {
//     return 10;
//   }
//   console.log("12");
//   return 23;
// }
// console.log(checkSum());

var str = "aaaabccccdde";
var obj = {};
for (var i = 0; i < str.length; i++) {
  if (obj[str[i]]) {
    obj[str[i]] = obj[str[i]] + 1;
  } else {
    obj[str[i]] = 1;
  }
}
console.log(obj);
var odd = 0;
for (key in obj) {
  if (obj[key] % 2 == 1) {
    odd++;
  }
}
if (odd > 1) {
  console.log(false);
} else {
  console.log(true);
}
