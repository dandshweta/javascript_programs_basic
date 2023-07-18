//by object literal
const obj = {
  name: "shweta",
  age: "25",
  fun: function () {
    console.log("my name is " + this.name + " and age is " + this.age);
    console.log("My name is " + this.name + " and age is " + this.age + ".");
  },
};
obj.fun();

//by instance of object
const obj1 = new Object();
obj1.name = "shweta";
obj1.age = 25;
obj1.fun = function s() {
  console.log("My name is " + this.name + " and age is " + this.age + ".");
};
console.log(obj1);
// obj1.fun();

// //by constructor function
// const obj2 = function (name, age) {
//   this.name = name;
//   this.age = age;
//   const fun = function () {
//     console.log("My name is " + this.name + " and age is " + this.age + ".");
//   };
// };
// const Obj2 = new obj2("shweta", 25);
// obj2.fun;
// console.log(Obj2);

const Obj2 = function (name, age) {
  this.name = name;
  this.age = age;

  this.fun = function () {
    console.log("My name is " + this.name + " and age is " + this.age + ".");
  };
};

const obj2 = new Obj2("Shweta", 25);
obj2.fun();
console.log(obj2);

//NaN property
function s(num) {
  if (isNaN(num)) {
    return "it is not a number";
  } else {
    return "it is number";
  }
}
console.log(s(100));
console.log(s("100S"));

//charAt
const str = "shweta";
console.log(str.charAt(1));

//
