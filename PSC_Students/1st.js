let str = "[{)){}}[})";
console.log(checkBalance(str));
function checkBalance(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "(" || str[i] == "[") {
      stack.push(str[i]);
    } else {
      const closing = str[i]; // ]
      if (closing == "]") {
        if (stack[stack.length - 1] == "[") {
          stack.pop();
        } else {
          return "unbalanced";
        }
      } else if (closing == ")") {
        if (stack[stack.length - 1] == "(") {
          stack.pop();
        } else {
          return "unbalanced";
        }
      } else {
        if (stack[stack.length - 1] == "{") {
          stack.pop();
        } else {
          return "unbalanced";
        }
      }
    }
  }
  return stack.length == 0 ? "balanced" : "unbalanced";
}
