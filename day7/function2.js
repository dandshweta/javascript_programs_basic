function runLoop(number) {
  const newNum = parseInt(number);

  if (Number.isNaN(newNum)) {
    console.log("Invalid number");
  }

  for (let i = 0; i < newNum; i++) {
    console.log("output no.:", i);
  }
}

runLoop("10");
runLoop("shweta");
runLoop("10");
