function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      result.push(a1[i]);
      i++;
    } else {
      result.push(a2[j]);
      j++;
    }
  }
  //a1 or a2 might have some element let
  //use loop to put them into result
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length) / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(right), mergeSort(left));
  }
}

console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, -36]));
