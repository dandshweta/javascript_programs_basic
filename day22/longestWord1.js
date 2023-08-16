function longestWord(str) {
  let words = str.split(" ");
  let maxLength = 0;
  let longestWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWords = [words[i]];
    } else if (words[i].length === maxLength) {
      longestWords.push(words[i]);
    }
  }

  console.log(maxLength);
  console.log(longestWords);
}

longestWord("My name is ankit jain & i'm from morena morema");
