function strLen(str, i) {
  if (str[i] == undefined) {
    return i;
  }
  return strLen(str, i + 1);
}

console.log(strLen("aman", 0));
