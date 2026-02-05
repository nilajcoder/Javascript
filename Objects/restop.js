
/*

Rest in Object Destructuring

The rest operator in JavaScript (also written as ...) is used to
 collect multiple elements into a single array or object. It’s the opposite of the spread operator.
*/

let person={

      name: "Ram",
  age: 25,
  city: "Delhi",
  country: "India"
}

let {name,...rest}=person

console.log(name)//ram
console.log(rest) //rest 