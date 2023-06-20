const addNum = (a, b) => {
  const result = a + b;
  return result;
};

const arrowFunc = () => {
  // Operations
};

console.log("Result", addNum(10, 9));

const addNums = (a, b) => {
  const result = a + b;
  return result;
};

console.log(addNums(1, 2));
console.log(addNums(2, 2));
console.log(addNums(3, 2));
console.log(addNums(4, 2));
console.log(addNums(5, 2));

// Normal Function
function tryMe() {}

// Arrow function
const addNumV2 = (a, b) => {
  return a + b;
};

const addNumV3 = (a, b) => a + b;

const addNumV4 = function (a, b) {
  return a + b;
};

// Function which performs an addition of two number
// Data - Paramters
function addNumbers(a, b) {
  const sum = a + b;
  return sum;
}

const sum = addNumbers(10, 20);
console.log("sum: ", sum); // Data -> Arguments
console.log(addNumV3(101, 220)); // Data -> Arguments
console.log(addNumV3(101, 220)); // Data -> Arguments
console.log(addNumV3(101, 220)); // Data -> Arguments
console.log(addNumV2(101, 220)); // Data -> Arguments
console.log(addNumbers(101, 202)); // Data -> Arguments
console.log(addNumbers(1022, 202)); // Data -> Arguments
