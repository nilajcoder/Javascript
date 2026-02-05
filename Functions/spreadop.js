

/*
 Spread in Function Calls
*/


const nums = [1, 2, 3];

function add(x, y, z) {
  return x + y + z;
}

console.log(add(...nums)); // 6