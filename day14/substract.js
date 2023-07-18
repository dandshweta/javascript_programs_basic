//Algorithm:
//step1:Take one variable for store the result
//step2:Take a for loop for traverse each elements.
//step3:Add result in result variable.
//step4:Then return the result

// Write a function to calcuate the sum of every element of an array

const arrSum = (arr) => {
  let result = arr[0];
  //   let result=" ";  // it print array
  for (let i = 1; i < arr.length; i++) {
    result = result - arr[i];
    // result = result + i;
  }
  return result;
};

console.log(arrSum([1, 3, 4, 5, 6, 7, 8, 9, 9]));
console.log(arrSum([1]));
