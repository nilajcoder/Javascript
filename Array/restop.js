

/*
Rest in Array Destructuring
*/

const [first, second, ...others] = [1, 2, 3, 4, 5];

console.log(first);  // 1
console.log(second); // 2
console.log(others); // [3, 4, 5]


/*
Swap
*/

let a=10;
let b=20;
[a,b]=[b,a]
console.log(a);
console.log(b)