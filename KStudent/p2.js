function runProgram(input) {
  var input = input.split("\n");
  var testCases = input[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var str = input[line];
    var N = str.length;
    line++;
    uniqueGift(str, N);
  }
}

function uniqueGift(str, N) {
  var queue = [];
  var object = {};
  var unique = "";
  for (var i = 0; i < str.length; i++) {
    var gift = str[i];
    if (object[gift] == undefined) {
      object[gift] = 1;
      queue.push(gift);
      unique += queue[0];
    } else {
      object[gift] += 1;
      if (queue[0] == gift) {
        queue.shift();
      }
      if (queue.length == 0) {
        unique += "#";
      } else {
        unique += queue[0];
      }
    }
  }
  console.log(unique);
  // console.log(object)
}
runProgram(`1
abcddabdcf`);
