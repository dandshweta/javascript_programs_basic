function runLoop(num) {
  for (let i = 0; i <= num.length; i++) {
    let output = i * 2;
    console.log("even no.", output);
  }
}
runLoop(50);

// find even Number.
function findEvenNumbers(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log("Even number:", i);
    }
  }
}

findEvenNumbers(50);
