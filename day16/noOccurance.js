let count = 0;

function searchCount(arr, num) {
  let newNum = Number.isInteger(num);
  if (newNum === true) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count = count + 1;
      }
    }
    return count;
  } else {
    console.log("given is not no.");
  }
}

console.log(searchCount([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2], a));
