function runLoop(num) {
  if (typeof num !== "number") {
    console.log("Invalid number:", num);
    return;
  }

  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
runLoop(10);
runLoop(100);
runLoop(20); //vallid number
runLoop("shweta"); //invalid number
runLoop("10"); //vallid number
