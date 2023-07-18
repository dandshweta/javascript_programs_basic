function removeDuplicateCharacters(str) {
  let result = "";
  let charCount = {};
  let sameChar = " ";

  for (let i = 0; i < str.length; i++) {
    if (!charCount[str[i]]) {
      result = result + str[i];
      charCount[str[i]] = true;
    } else {
      sameChar = sameChar + str[i];
    }
  }
  console.log("sameChar", sameChar);
  return result;
}
console.log(removeDuplicateCharacters("tthissss"));
