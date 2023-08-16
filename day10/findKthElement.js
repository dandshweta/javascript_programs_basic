function sortArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //   console.log(arr);
}

function findSecondLargest(arr, k) {
  sortArr(arr);
  return arr[arr.length - k];
}

console.log(findSecondLargest([1, 4, 5, 3, 2, 6, 7, 8, 9, 4], 3));
