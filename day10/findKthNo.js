function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function findSecondLargest(arr, k) {
  bubbleSort(arr);
  return arr[arr.length - k]; // Second-to-last element is the second largest
}

// const arr = [1, 4, 5, 3, 2, 6, 7, 8, 9, 4];
console.log(findSecondLargest([1, 4, 5, 3, 2, 6, 7, 8, 9, 4], 2)); // Output will be 8

//second way

// const array = [1, 3, 5, 2, 6, 7, 4];
// const obj = {};

// for (let i = 0; i < array.length; i++) {
//   obj[i] = obj.hasOwnPropery(i) ? obj[i]++ : 1;
// }

// console.log(obj);
