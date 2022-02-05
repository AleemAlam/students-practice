var arr = ["AbhiShek", "Tanisha", "Santosh"];
for (var i = 0; i < arr.length; i++) {
  var a = arr[i];
  var changedWord = "";
  for (var j = 0; j < a.length; j++) {
    var d = a[j]; //A
    changedWord = changedWord + toToggleCase(d);
  }
  console.log(changedWord);
}
function toToggleCase(ch) {
  //d
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < lower.length; i++) {
    if (lower[i] == ch) {
      return upper[i];
    } else if (upper[i] == ch) {
      return lower[i];
    }
  }
}
