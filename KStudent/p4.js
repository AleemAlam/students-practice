function runProgram(input) {
  // Write code here
  var input = input.split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t; i++) {
    var str = input[line];
    line++;
    Gift(str);
  }
}
function Gift(str) {
  var Q = [];
  var arr = [];
  var gift = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] == str[i]) {
        count++;
      }
    }
    if (count == 1) {
      Q.push(str[i]);
    } else if (Q[0] == str[i] && count > 1) {
      Q.shift();
    }
    if (Q.length == 0) {
      gift.push("#");
    }

    var count1 = 0;
    var t = 0;
    while (count1 !== 1 && t < arr.length) {
      count1 = 0;
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] == Q[0]) {
          count1++;
        }
      }
      t++;
      if (count1 > 1) {
        Q.shift();
      }
    }
    gift.push(Q[0]);
  }

  console.log(gift.join(""));
}

runProgram(`10
mrqcgjmdkywutarssrdr
wlrjztufgskxtheovlot
ifgbmldawzjkvkdfyxnf
mhnitzndvykekxjemdlm
rizyephvvxrbjgdhwtho
xkxpsiiumdtdqhxhgbfh
jcwpfykhcovvbyidxgaw
adgkbpcsuqcwjslxyemj
wsanihzgqqnupbscrkol
kezfemyaenbdnispjcqc`);
