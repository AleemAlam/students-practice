const arr = [];

function subSeq(str, out) {
  if (str.length == 0) {
    // if (out != "") {
    //   const sum = out
    //     .split("")
    //     .map(Number)
    //     .reduce((a, b) => a + b);
    //   if (sum % 2 != 0) {
    //     console.log(out);
    //   }
    // }
    console.log(out);
    return;
  }
  subSeq(str.substring(1), out + str[0]); // ai, mas
  subSeq(str.substring(1), out); // "", masa
}
// "asai", m

subSeq("abc", "");
