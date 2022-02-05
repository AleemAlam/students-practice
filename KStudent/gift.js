function runProgram(input) {
  // Write code here
  var input = input.split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t; i++) {
    var str = input[line];
    line++;
    Gift(str);
  }
}
function Gift(str) {
  var Q = [];
  var arr = [];
  var gift = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == str[i]) {
        count++;
      }
    }
    if (count == 1) {
      Q.push(str[i]);
    } else if (Q[0] == str[i] && count > 1) {
      Q.shift();
    }
    if (Q.length == 0) {
      gift.push("#");
    }

    var count1 = 0;
    var t = 0;
    while (count1 !== 1 && t < arr.length) {
      count1 = 0;
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] == Q[0]) {
          count1++;
        }
      }
      t++;
      if (count1 > 1) {
        Q.shift();
      }
    }
    gift.push(Q[0]);
  }

  console.log(gift.join(""));
}
// function runProgram(input) {
//   input = input.trim().split("\n");
//   var test = +input[0];
//   var line = 1;

//   for (var i = 1; i <= test; i++) {
//     var str = input[line++];
//     getUnique(str);
//   }

//   function getUnique(str) {
//     var obj = {};
//     var queue = [];
//     var line = "";
//     for (var i = 0; i < str.length; i++) {
//       if (obj[str[i]] == undefined) {
//         obj[str[i]] = 1;
//         queue.push(str[i]);
//       } else {
//         obj[str[i]] += 1;
//       }

//       for (var j = 0; j < queue.length; j++) {
//         if (obj[queue[0]] != 1) {
//           queue.shift();
//         } else {
//           break;
//         }
//       }
//       // while(obj[queue[0]]!=1)
//       // {
//       //     queue.shift();

//       // }
//       if (queue.length == 0) {
//         line += "#";
//       } else {
//         line += queue[0];
//       }
//     }
//     console.log(line);
//   }
// }
function runProgram(input) {
  input = input.trim().split("\n");
  var test = +input[0];
  var line = 1;

  for (var i = 1; i <= test; i++) {
    var str = input[line++];
    getUnique(str);
  }

  function getUnique(str) {
    var obj = {};
    var queue = [];
    var line = "";
    for (var i = 0; i < str.length; i++) {
      if (obj[str[i]] == undefined) {
        obj[str[i]] = 1;
        queue.push(str[i]);
      } else {
        obj[str[i]] += 1;
      }

      for (var j = 0; j < queue.length; j++) {
        if (obj[queue[0]] != 1) {
          queue.shift();
        }
      }

      if (queue.length == 0) {
        line += "#";
      } else {
        if (obj[queue[0]] == 1) {
          line += queue[0];
        } else {
          queue.shift();
        }
      }
    }
    console.log(line);
  }
}

runProgram(`1
abcddabdcf`);
