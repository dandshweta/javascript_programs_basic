function findLargestPalindrome(str) {
  const newStr = str
    .replace(/[^\w\s]/g, "")
    .split(" ")
    .toLowerCase();
  for (let i = 0; i <= newStr.length; i++) {
    let arrayWord = newStr[i];
    let word = "";
    let NoWord = [];
    for (let j = 0; j < arrayWord.length; j++) {
      word = word + arrayWord[j];

      if (arrayWord === word) {
        NoWord.push(word);
        console.log(NoWord);
      } else {
        j++;
      }
    }
  }

  // return newStr;
}

console.log(
  findLargestPalindrome("Hello madam! My name is Ankit. I'm Bob's friend.")
);
