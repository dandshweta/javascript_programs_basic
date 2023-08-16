function kthMax(arr, k) {
  let no = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > no) {
      no = arr[i];
    }
  }
  return no;
}
console.log(kthMax([3, 2, 1, 5, 6, 4], 2));
