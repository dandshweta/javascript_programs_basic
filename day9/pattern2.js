function pattern(num) {
  for (let i = 1; i <= num; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result = result + j;
    }
    console.log(result);
  }
}
pattern(5);

// 1
// 12
// 123
// 1234
// 12345
