function display(name = "User") {
  if (typeof name !== "string") {
    return `input is not a string`;
  }
  let name1 = name[0].toUpperCase();

  for (let i = 1; i < name.length; i++) {
    name1 = name1 + name[i].toLowerCase();
  }
  return `hii, my name is ${name1}`;
}
console.log(display("shweta"));
console.log(display());
console.log(display(null));
console.log(display(undefined));

console.log(display(1));
console.log(display(Symbol));
console.log(
  display({ firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" })
);
console.log(display(true));

// function display(str = "User") {
//   if (typeof str !== "string" || typeof str === null) {
//     return `put proper input input is not string`;
//   }

//   let newStr = str[0].toUpperCase();
//   //   console.log(newStr);
//   for (let i = 1; i < str.length; i++) {
//     newStr = newStr + str[i].toLowerCase();
//     // console.log(newStr);
//   }
//   return `Hii my name is ${newStr} `;
// }

// console.log(display("shweta"));
// console.log(display());
// console.log(display(null));
// console.log(display(undefined));

// console.log(display(1));
