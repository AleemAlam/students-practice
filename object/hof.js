var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// forEach
// var count = 0;
// var result = arr.forEach(function (item, index, array) {
//   return item * 10;
// });
// console.log(result);
// for (var i of arr) {
//   console.log(i);
// }

// map
// newArr = [10, 20, 30, 40, 50, 60 ,70, 80]
// var newArr = arr.map(function (item, index) {
//   return item * 10;
// });
// console.log(newArr);

// filter

// var evenNumbers = arr.filter(function (item) {
//   if (item % 2 == 0) {
//     return true;
//   }
//   return false;
// });
// console.log(evenNumbers);

// reduce
///[1,2,3,4,5,6,7,8]
var sum = arr.reduce(function (pr, cu, ind, arr) {
  console.log(pr, cu);
  return 10;
});
console.log(sum);
// var products = [
//   {
//     apple: {
//       iphone: [
//         { name: "iphone6", price: 400 },
//         { name: "iphone7", price: 700 },
//         { name: "iphone8", price: 800 },
//       ],
//       mac:[
//           {name:"Imac", price:1000},
//           {name:"macMini", price:700}
//       ]
//     },
//   },
// ];

function sum(a, b) {
  return a + b;
}
