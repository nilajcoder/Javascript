

/*
Default parameters allow you to assign a default value to a function parameter
 if no value (or undefined) is provided.

Introduced in ES6 (ES2015).
*/

function greet(name="Nilaj"){


    return `Hello ${name}`
}

console.log(greet())//Nilaj
console.log(greet("Debobroto"))
