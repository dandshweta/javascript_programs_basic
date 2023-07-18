function palindrome(str) {
  str = str.toLowerCase();

  // let lastChar=str.length-1;
  for (let i = 0; i <= str.length / 2; i++) {
    let firstChar = str[i];
    let lastChar = str[str.length - 1 - i];
    if (firstChar === lastChar) {
      return "given string is palindrome";
    } else {
      return "given string is not palindrome";
    }
  }
}
console.log(palindrome("Madam"));
console.log(palindrome("shweta"));
