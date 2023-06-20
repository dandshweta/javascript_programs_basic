const arr = ["rose", 2, 4, 6];
api1.createOrder(arr, function () {
  api1.makePayment(function () {
    api1.showorderSummary();
  });
});
//callback function
