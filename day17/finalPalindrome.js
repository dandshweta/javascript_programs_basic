const checkPalindrome = (input) => {
  input = input.toLowerCase();

  for (let i = 0; i < input.length / 2; i++) {
    const currentElement = input[i];
    const lastElement = input[input.length - 1 - i];

    if (currentElement !== lastElement) {
      return false;
    }
  }

  return true;
};
console.log(checkPalindrome("Madam"));
