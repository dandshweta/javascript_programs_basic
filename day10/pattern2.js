for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 9; j++) {
    if (j <= i - 1) {
      row += " ";
    } else if (j <= 10 - i) {
      row += "*";
    }
  }
  console.log(row);
}
