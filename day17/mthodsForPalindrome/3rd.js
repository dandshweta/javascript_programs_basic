const checkPalindrome = (input) => {
  input = input.toLowerCase();
  let newStr = "";
  for (let i = 0; i < input.length; i++) {
    newStr = newStr + input[i];
  }

  if (input === newStr) {
    return true;
  } else {
    false;
  }
};
console.log(checkPalindrome("Madam"));
