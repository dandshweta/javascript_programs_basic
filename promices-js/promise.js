const promise = (key) => {
  return new Promise((reply, reject) => {
    if (key) {
      reply("done");
    } else {
      reject("failed");
    }
  });
};
// promise.then(()=>{

// })
promise(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
