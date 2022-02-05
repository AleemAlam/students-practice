// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("2");
//     }, 1000);
//   });
// }

// function asyncCall() {
//   console.log("1");
//   resolveAfter2Seconds()
//     .then((res) => console.log(res))
//     .then(() => {
//       console.log(3);
//     });
//   // expected output: 'resolved'
// }

// asyncCall();

// 4
// *.*.
// .*.*
// *.*.
// .*.*

// var arr = [".*.", "*.*", ".*."];
// console.log(checkHori(arr), checkVerti(arr));
// function checkHori(arr) {
//   var max = arr.length - 1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[max]) {
//       return false;
//     }
//     max--;
//   }
//   return true;
// }
// function checkVerti(arr) {
//   var row = arr.length;
//   var col = arr[0].length;
//   for (var i = 0; i < col; i++) {
//     for (var j = 0; j < row; j++) {
//       if (arr[j][i] != arr[row - j - 1][i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function detectPalII(N, string) {
  var object = {};
  for (var i = 0; i < N; i++) {
    var char = string[i];
    if (object[char] == undefined) {
      object[char] = 1;
    } else {
      var prev = object[char];
      object[char] = prev + object[char];
    }
  }
  // console.log(object)
  var count = 0;
  console.log(object);
  for (keys in object) {
    if (object[keys] % 2 != 0) {
      count++;
      // console.log(object[keys])
    }
  }
  console.log(count);
  if (count > 1) {
    console.log("Not Possible!");
  } else {
    console.log("Possible!");
  }
}

detectPalII(
  99,
  "yxhtfboynmkokuitomvnyboqeeuugvwsnromgeruecxlkwkjdfdgknmkocttlkfvyvvawulldiapatqlktuwuicbpsrjybldwaq"
);
