function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      arr2[index] = 0;
    } else {
      return false;
    }
  }
  return arr2.every((char) => char === 0);
}
console.log(anagram("carrace", "racecar"));
