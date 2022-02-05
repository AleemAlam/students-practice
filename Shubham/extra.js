function subSeq(str, out, cur) {
  if (str.length > 0) {
    if (out != "") console.log(out);
  }
  if (cur == str.length) {
    return;
  }
  for (let i = cur; i < str.length; i++) {
    out += str[i];
    subSeq(str, out, i + 1);
    out = out.substring(0, out.length - 1);
  }
}
subSeq("abc", "", 0);