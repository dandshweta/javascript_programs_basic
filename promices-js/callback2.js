function doSomething(callback) {
  // Perform some asynchronous operation
  setTimeout(function () {
    // Simulating an asynchronous operation with setTimeout
    var result = "Operation completed";
    callback(result); // Execute the callback function
  }, 2000);
}

function callbackFunction(message) {
  console.log("Callback function:", message);
}

// Calling the doSomething function and passing the callbackFunction as an argument
doSomething(callbackFunction);
