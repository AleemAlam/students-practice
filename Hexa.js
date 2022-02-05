function RGBToHexa(rgb) {
  var ans = "#";
  for (let i = 0; i < rgb.length; i++) {
    ans += convertToHex(rgb[i]);
  }
  return ans;
}

function convertToHex(decimal) {
  var hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  var convertedNum = "";
  while (decimal > 0) {
    var index = decimal % 16;
    decimal = Math.floor(decimal / 16);
    convertedNum += hexa[index];
  }
  var hexNum = "";
  for (var i = convertedNum.length - 1; i >= 0; i--) {
    hexNum += convertedNum[i];
  }
  return hexNum;
}

console.log(RGBToHexa([100, 121, 93]));
