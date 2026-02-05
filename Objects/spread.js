/*

The spread operator (...) in JavaScript is used to expand elements
 of an array or object into individual elements. It’s very useful for copying, merging, and passing data.

*/


// Spread in Objects
// Copying an Object
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1 };

console.log(obj2); // { x: 1, y: 2 }

//  Merging Objects

const objA = { a: 3 };
const objB = { b: 4 };
const merged = { ...objA, ...objB };

console.log(merged); // { a: 3, b: 4 }