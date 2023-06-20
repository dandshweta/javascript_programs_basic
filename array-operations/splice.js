function splice(arr) {
  arr.splice(1, 2, "a", 55);
  return arr;
}
console.log(splice([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//[1,a,b,4,5,6,7,8,9]
//it can modify the original array
//syntax splice(startFrom,deleteHowManyElements,addelements like a,b,.....n)
