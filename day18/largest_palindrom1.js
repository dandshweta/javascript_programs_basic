function isPalindrome(word) {
  const length = word.length;
  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findLargestPalindrome(sentence) {
  const cleanedSentence = sentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const words = cleanedSentence.split(" ");

  let palindromes = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (isPalindrome(word)) {
      palindromes.push(word);
    }
  }

  if (palindromes.length === 0) {
    return ""; // No palindromes found
  }

  let largestPalindrome = palindromes[0];

  for (let i = 1; i < palindromes.length; i++) {
    const palindrome = palindromes[i];
    if (palindrome.length > largestPalindrome.length) {
      largestPalindrome = palindrome;
    }
  }

  return largestPalindrome;
}
// isPalindrome("Hello madam my name is ankit. I'm bob friend");

console.log(
  findLargestPalindrome("Hello madam my name is ankit. I'm bob friend")
);
