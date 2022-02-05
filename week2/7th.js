var input = `5
12 34 65 23 29`;

runProgram(input);
//

function maxNumber(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function remove(arr, num) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// // console.log(max([1, 56, 3, 5, 6, 11, 8, 4, 6, 98, 8]));
// // console.log(remove([1, 56, 3, 5, 6, 11, 8, 4, 6, 98, 8], 98));

function runProgram(input) {
  input = input.trim().split("\n");
  var n = Number(input[0]);
  var arr = input[1].trim().split(" ").map(Number);
  var i = 0;
  while (i < 3) {
    var max = maxNumber(arr);
    arr = remove(arr, max);
    console.log(arr);
    i++;
  }
}
