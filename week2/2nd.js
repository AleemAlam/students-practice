function getMax(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function removeElement(arr, ele) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != ele) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function main() {
  var arr = [1, 12, 4, 99, 5];
  var newArr = Object.values(arr);
  var i = 0;
  while (i < 3) {
    var max = getMax(newArr);
    newArr = removeElement(newArr, max);
    // [1,12,4,5]
    console.log(max);
    i++;
  }
}

main();
