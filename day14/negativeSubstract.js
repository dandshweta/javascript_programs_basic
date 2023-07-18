const arr = [1, 2, -7, -8];

/**
 * @description {Method to sum all array numbers}
 * @param {Number[]} input
 *
 * Step 1   - Create a substraction variable with 0
 * Step 2   - Iterate the array & add every element with sum variable
 * Step 3   - Return the sum
 */
const arrNegativeSubtract = (romeshKaArray) => {
  let sum = null;

  for (let i = 0; i < romeshKaArray.length; i++) {
    if (sum === null) {
      sum = romeshKaArray[i];
    } else {
      sum = sum - romeshKaArray[i];
    }
    //sum = sum === null ? romeshKaArray[i] : sum - romeshKaArray[i];
  }

  return sum;
};

console.log(arrNegativeSubtract(arr));
