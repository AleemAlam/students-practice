var str = "aleem";
var newStr = "";
for (var i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
if (newStr == str) {
  console.log(true);
} else {
  console.log(false);
}

var i = 0;
var j = str.length - 1;
var flag = true;
//    ij
// racecar

// O(N)
while (i < j) {
  if (str[i] != str[j]) {
    flag = false;
    break;
  }
  i++;
  j--;
}
console.log(flag);
