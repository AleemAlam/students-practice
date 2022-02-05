let gift = (arr) => {
  let unique = {};
  let queue = [];
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (unique[arr[i]] === undefined) {
      unique[arr[i]] = 1;
    } else {
      unique[arr[i]]++;
    }

    if (unique[arr[i]] === 1) {
      queue.push(arr[i]);
    } else {
      queue = queue.filter((el) => {
        return el !== arr[i];
      });
    }

    if (queue.length !== 0) {
      result += queue[0];
    } else {
      result += "#";
    }
  }

  return result;
};
console.log(gift("abcddabdcf".split("")));
