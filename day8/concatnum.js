function printLoop(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    // Add in forward direction
    result += i; // result = result + i

    //Add in reverse order
    //result = i + result;
  }

  return result;
}

console.log(printLoop(12));
