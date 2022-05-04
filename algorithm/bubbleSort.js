// function bubbleSort(arr) {
//   for (let i = 0; i <= arr.length - 2; i++) {
//     let isSwap = false;
//     for (let j = arr.length - 1; j >= i + 1; j--) {
//       if (arr[j - 1] > arr[j]) {
//         let temp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = temp;
//         isSwap = true;
//       }
//     }
//     if ((isSwap = false)) {
//       break; //best case O(n)
//     }
//   }
//   console.log([arr]);
// }

function bubbleSort(arr) {
  let len = arr.length;
  while (len > 1) {
    len--;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  console.log(arr);
}

let testArr = [];

for (let i = 0; i < 5; i++) {
  testArr.push(Math.floor(Math.random() * 100));
}

bubbleSort([8, 6, 1, 10, 5, 3, 9, 2, 7, 4]);
