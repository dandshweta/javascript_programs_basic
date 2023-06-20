const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("call");
    resolve();
  }, 2000);
});

promise.then(() => {
  console.log("promise resolve");
});
