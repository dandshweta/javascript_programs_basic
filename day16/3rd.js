let count = 0;

function searchCount(arr, num) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count = count + 1;
      }
    }
    return count;
  } else {
    console.log("Given value is not an array.");
  }
}

console.log(searchCount([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2], 1));
console.log(searchCount("shweta", 1));
