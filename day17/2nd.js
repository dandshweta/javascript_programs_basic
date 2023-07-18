function reverse(str) {
  str = str.toLowerCase();
  let reversedStr = "";
  if (typeof str === "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr = reversedStr + str[i];
    }

    return reversedStr;
  } else {
    return "write vallid string";
  }
}

console.log(reverse("ankit"));
console.log(reverse("Ankit"));
console.log(reverse(1));
