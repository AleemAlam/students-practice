function subSequence(str, ans) {
  if (str.length == 0) {
    console.log(ans);
    return;
  }
  subSequence(str.substring(1), ans);
  subSequence(str.substring(1), ans + str[0]);
}

console.log(subSequence("abcd", ""));
