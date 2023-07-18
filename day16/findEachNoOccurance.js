function countOccurrences(arr) {
  if (Array.isArray(arr)) {
    const countObj = {};
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (countObj[num]) {
        countObj[num] = countObj[num] + 1;
      } else {
        countObj[num] = 1;
      }
    }
    return countObj;
  } else {
    console.log("Given value is not an array.");
  }
}

console.log(countOccurrences([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2]));
