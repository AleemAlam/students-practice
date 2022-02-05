function traverse(arr) {
  var j = arr.length - 1;
  var i = 0;
  while (i > j) {
    if (arr[i] != arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
function column(arr) {
  for (var i = 0; i < arr[0].length; i++) {
    var k = arr[0].length - 1;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j][i] != arr[j][k]) {
        return false;
      }
    }
    return true;
  }
}

var arr = ["*.*.", ".*.*", "*.*.", ".*.*"];

// *.*.
// .*.*
// *.*.
// .*.*
traverse(arr);
