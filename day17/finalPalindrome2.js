const checkPalindrome = (input) => {
  input = input.toLowerCase();

  let j = input.length - 1;

  for (let i = 0; i < input.length / 2; i++) {
    const currentElement = input[i];
    const lastElement = input[j - i]; // input[j - i] -> input[5-1-0] -> input[4] -> "M"

    if (currentElement !== lastElement) {
      return false;
    }
  }

  return true;
};
console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("goog"));
