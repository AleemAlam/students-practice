let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let obj = {};
for (let i = 0; i < letter.length; i++) {
  obj[letter[i]] = i + 1;
}
function letterToNumber(str) {
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    ans *= 26;
    ans += obj[str[i]];
  }
  return ans;
}
console.log(letterToNumber("ZY"));
