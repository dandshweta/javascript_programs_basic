for (let i = 1; i <= 5; i++) {
  let head = "";
  let tail = "";

  for (let j = 1; j <= i - 1; j++) {
    head = head + " ";
    tail = tail + " ";
  }
  let middle = "";
  for (let k = 1; k <= 9; k++) {
    // if (i + k <= 10 && k - i >= 0) {
    //   middle = middle + "*";
    // }
    if (k <= i - 1) {
      tail += " ";
    } else if (k <= 10 - i) {
      middle = middle + "*";
    }
  }

  console.log(head + middle + tail);
}
