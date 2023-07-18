const oddNo = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
};

const arr = [
  5, -3, 10, -8, 2, -7, 15, -1, 6, -4, 12, -9, 3, -6, 11, -2, 8, -5, 14, -10,
];
console.log(oddNo(arr));
