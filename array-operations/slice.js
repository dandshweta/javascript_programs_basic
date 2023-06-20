function slice(arr) {
  let newarr = arr.slice(2, 6);

  console.log(newarr);
  return arr;
}
console.log(slice([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// output:

// [ 3, 4, 5, 6 ]
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
//slice method only extract elements fron the array and it does not modify the original array
