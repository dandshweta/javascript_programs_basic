function pattern(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = num; j > i; j--) {
      result += "*";
    }
    // result += "\n"; // Add a line break after each row
  }
  return result;
}

console.log(pattern(5));

// *****
// ****
// ***
// **
// *
