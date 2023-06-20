const promise = new Promise((reply, reject) => {
  let a = 5;
  let b = 4;
  let add = a + b;
  if (add === 4) {
    reply();
  } else {
    // console.log("failed");
    reject();
  }
});
promise
  .then(() => {
    console.log("done");
  })
  .catch(() => {
    console.log("failed");
  });
