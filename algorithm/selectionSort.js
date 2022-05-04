function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
      console.log(arr);
    }
  }
}

selectionSort([8, 6, 1, 10, 5, 3, 9, 2, 7, 4]);
