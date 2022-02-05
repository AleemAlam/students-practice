var len = 4;

for (var i = 0; i < 4; i++) {
  var row = "";
  for (var j = 0; j < 4; j++) {
    if (j == 0 || j == 3 || i == 0 || i == 3) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

// ****
// *  *
// *  *
// ****
