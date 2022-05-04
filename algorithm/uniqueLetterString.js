function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let maxLength = -Infinity;
  let counter = {};

  while (str.length > end) {
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }

  if (maxLength == -Infinity) {
    console.log("cannot find unique letters substring.");
    return null;
  } else {
    console.log(maxLength);
    return maxLength;
  }
}
uniqueLetterString("thisishowwedoit");
