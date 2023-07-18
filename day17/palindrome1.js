const checkPalindrome = (input) => {
  input = input.toLowerCase();
  let newStr = "";

  for (let i = input.length - 1; i >= 0; i--) {
    newStr = newStr + input[i];
  }

  if (input === newStr) {
    return true;
  } else {
    false;
  }

  //   return input === newStr;
};

console.log(checkPalindrome("Madam"));
