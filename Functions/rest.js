

/*


The rest operator in JavaScript (also written as ...) is used to
 collect multiple elements into a single array or object. It’s the opposite of the spread operator.
*/



function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50