

/*

Template Literals in JavaScript (ES6)

Template literals were introduced in ES6 (ECMAScript 2015). They allow:

String interpolation

Multi-line strings

Embedded expressions

Tagged templates (advanced)

They use backticks ` instead of quotes ' ' or " ".
*/

/*
1. String interpolation
${} is called interpolation
 Anything inside ${} is evaluated as JavaScript expression
*/


/*
Older Way
let name = "Ram";
let age = 22;
let msg = "My name is " + name + " and I am " + age + " years old.";
*/
let name="Nilaj"
let message=`Hii Your name is ${name}`
console.log(message)

let a=10
let b=20
console.log(`The sum of Two number = ${a+b}`)

function squre(n){
    return n*n
}
console.log(`Squre of a number = ${squre(5)}`)

/*
Multi Line
*/
let bb=`Good
 Morning`
 console.log(bb)


 /*
 4️⃣ Dynamic HTML Generation
 */
 let nam = "Ram";

let html = `
  <div>
    <h1>Hello ${name}</h1>
    <p>Welcome!</p>
  </div>
`;
console.log(html)