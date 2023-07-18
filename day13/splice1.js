const arr = [1, 2, 3, 4, 5, [1, 2, 3, 4]];
let newarr = arr.splice(2);
console.log("arr", arr);
console.log("newarr", newarr);

// arr [ 1, 2 ]
// newarr [ 3, 4, 5 ]

//important note:
//Number(" ")----->0
