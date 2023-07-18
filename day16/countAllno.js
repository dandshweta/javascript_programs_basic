let count = 0;

function searchCount(arr, num) {
  if (Number.isInteger(num)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count = count + 1;
      }
    }
    return count;
  } else {
    return "Given value is not a number.";
  }
}

console.log(searchCount([1, 2, 3, 4, 1, 2, null, 4, 5, 6, 7, 8, 1, 2], 3));
