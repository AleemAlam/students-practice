const q1 = (n, k, arr) => {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  if (sum % k !== 0) {
    // return 1;
    console.log(1);
  } else {
    let l1 = 0;
    let l2 = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] % k !== 0) {
        l1 = n - i - 1;
        break;
      }
    }
    for (let j = n - 1; j >= 0; j--) {
      if (arr[j] % k !== 0) {
        l2 = n - j + 1;
        break;
      }
    }
    let s = 0;
    let count = 0;
    let length = Math.max(l1, l2);
    for (let i = 0; i < length; i++) {
      s += arr[i];
    }
    if (s % k !== 0) {
      count++;
    }
    let left = 0;
    let right = length;
    while (right < n) {
      s += arr[right] - arr[left];
      if (s % k !== 0) {
        count++;
      }
      left++;
      right++;
    }
    console.log(count);
  }
};
