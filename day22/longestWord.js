function longestWord(str) {
  let word = str.split(" ");
  let wordSize = 0;
  let bigWord = "";
  for (let i = 0; i <= word.length; i++) {
    if (word[i] > wordSize) {
      wordSize = word[i];
      bigWord = word[i];
    }
  }
  console.log(wordSize);
  console.log(bigWord);
}
longestWord("My name is ankit jain & i'm from morena morema");
