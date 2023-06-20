function printPattern(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
      // 1 - "" + 1 -> "1"
      // 2 - "1" + 2 -> "12"
      // 3 - "12" + 3 -> "123"
    }

    console.log(row);
  }
}

printPattern(5);

// 1
// 12
// 123
// 1234
// 12345
