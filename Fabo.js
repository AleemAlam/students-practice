function fabo(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fabo(n - 1) + fabo(n - 2);
}

// console.log(fabo(15));

// function print(index, arr, sum) {
//   // 2, [], 5
//   if (index == arr.length) {
//     //
//     return sum;
//   }
//   sum += arr[index]; // 9
//   return print(index + 1, arr, sum); // 3 , [], 9
// }

// function print(index, arr) {
//   if (arr.length == 0) {
//     return;
//   }
//   if (index == arr.length - 1) {
//     return;
//   }
//   console.log(arr[index], arr[index + 1]);
//   print(index + 1, arr);
// }

// print(0, []);
// var count = 0;
// function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
//   if (n == 1) {
//     return;
//   }
//   towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
//   console.log(count);
//   count++;
//   towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
// }

// // Driver code
// var n = 72; // Number of disks
// towerOfHanoi(n, "A", "C", "B");
