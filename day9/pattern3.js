function pattern(num) {
  for (let i = 1; i <= num; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result = result + i;
    }
    console.log(result);
  }
}
pattern(5);

// 1
// 22
// 333
// 4444
// 55555
