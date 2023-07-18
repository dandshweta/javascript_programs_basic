function findLargestPalindrome(str) {
  const newStr = str
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .split(" ");
  console.log("newarray:", newStr);
  let largestPalindrome = "";

  for (let i = 0; i < newStr.length; i++) {
    const word = newStr[i];
    let isPalindrome = true;

    for (let j = 0; j < word.length / 2; j++) {
      if (word[j] !== word[word.length - 1 - j]) {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome && word.length > largestPalindrome.length) {
      largestPalindrome = word;
    }
  }

  return largestPalindrome;
}

console.log(
  findLargestPalindrome("Hello madam! My name is Ankit. I'm Bob's friend.")
);
