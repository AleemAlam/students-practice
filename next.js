// function getOccurrence(str) {
//   let count = 1;
//   let ans = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i + 1]) {
//       count++;
//     } else {
//       ans += str[i] + count;
//       count = 1;
//     }
//   }
//   console.log(ans);
// }
// getOccurrence("aabcc");

function getAns(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1] || i < k) {
      count++;
    } else {
      break;
    }
  }
  console.log(count);
}

getAns([3, 3, 2, 2, 1], 2);
