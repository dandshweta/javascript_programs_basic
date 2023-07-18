const arr = [1, 3, 4];

// Write a function to calcuate the sum of every element of an array

/**
 * @description {Method to sum all array numbers}
 * @param {Number[]} input
 *
 * Step 1   - Create a sum variable with 0
 * Step 2   - Iterate the array & add every element with sum variable
 * Step 3   - Return the sum
 */
const arrSum = (romeshKaArray) => {
  let sum = 0;

  for (let i = 0; i < romeshKaArray.length; i++) {
    //sum = sum + romeshKaArray[i];
    sum += romeshKaArray[i];
  }

  return sum;
};

console.log(arrSum(arr));
