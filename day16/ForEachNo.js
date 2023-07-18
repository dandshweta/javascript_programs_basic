function countOccurrences(arr) {
  if (Array.isArray(arr)) {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
      if (count[arr[i]]) {
        count[arr[i]] = count[arr[i]] + 1;
      } else {
        count[arr[i]] = 1;
      }
    }
    return count;
  } else {
    return "Given value is not an array.";
  }
}

console.log(countOccurrences([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2]));
console.log(countOccurrences(undefined));
console.log(countOccurrences([undefined]));
