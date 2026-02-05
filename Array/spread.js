
/*
The spread operator (...) in JavaScript is used to expand elements
 of an array or object into individual elements. It’s very useful for copying, merging, and passing data.
*/

// Copying an Array

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]
//Merging Arrays

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

console.log(merged); // [1, 2, 3, 4]