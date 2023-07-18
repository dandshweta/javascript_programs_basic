// function even(arr) {
//   let evenno = [];
//   let oddno = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenno.push(arr[i]);
//     } else {
//       oddno.push(arr[i]);
//     }
//   }
//   console.log("oddno", oddno);
//   return "enen no" + evenno;
// }
// console.log(even([2, 3, 4, 5, 6, 7, 8, 9]));

function even(arr) {
  let evenno = [];
  let oddno = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenno.push(arr[i]);
    } else {
      oddno.push(arr[i]);
    }
  }
  console.log(oddno);
  return evenno;
}

console.log(even([2, 3, 4, 5, 6, 7, 8, 9]));
