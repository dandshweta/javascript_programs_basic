function display(str = "User") {
  if (typeof str !== "string" || typeof str === null) {
    return `put proper input input is not string`;
  }
  if (typeof str === "string") {
    let newStr = str[0].toUpperCase();
    //   console.log(newStr);
    for (let i = 1; i < str.length; i++) {
      newStr = newStr + str[i].toLowerCase();
      // console.log(newStr);
    }
    return `Hii my name is ${newStr} `;
  }
  //    else {
  //     return `Hello "User, "Welcome to the team.`;
  //   }
}
console.log(display("shweta"));
console.log(display());
console.log(display(null));
console.log(display(undefined));

console.log(display(1));
