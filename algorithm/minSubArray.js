let minSubArray = (arr, sum) => {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      let currentLength = end - start;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      total -= arr[start];
      start++;
    } else if (end >= arr.length) {
      break;
    }
  }

  if (minLength === Infinity) {
    console.log("can not find subarray that can sum up to the given number");
  } else {
    console.log(minLength);
    return minLength;
  }
};

minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60);
