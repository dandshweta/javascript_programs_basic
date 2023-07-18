function removeDuplicateCharacters(str) {
  var result = "";
  var charCount = {};

  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      result = result + str[i];
      charCount[str[i]] = true;
    }
  }

  return result;
}
console.log(removeDuplicateCharacters("tthis"));
