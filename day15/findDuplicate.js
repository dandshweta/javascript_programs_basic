function findDuplicateCharacters(str) {
  var result = [];
  var charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (charCount[char]) {
      if (charCount[char] === 1) {
        result.push(char);
      }
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return result;
}

let input = "thisismyfirstdsa";
let duplicates = findDuplicateCharacters(input);
console.log(duplicates);
