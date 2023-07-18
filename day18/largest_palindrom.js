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

  let largestPalindrome = "";
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;

    if (wordLength > maxLength && isPalindrome(word)) {
      largestPalindrome = word;
      maxLength = wordLength;
    }
  }

  return largestPalindrome;
}

// Example usage
const sentence =
  "A man, a plan, a canal, Panama! Racecar drivers are good at racing.";
const largestPalindrome = findLargestPalindrome(sentence);
console.log("Largest palindrome:", largestPalindrome);
