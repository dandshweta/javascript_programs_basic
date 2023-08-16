const array = [1, 3, 5, 2, 6, 7, 4];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[i] = obj.hasOwnProperty(i) ? obj[i]++ : 1;
}

console.log(obj);
