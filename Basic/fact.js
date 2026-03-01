

/*
Write a Function in Js

Find Factorial of a number
*/


function factorial(n){

    if(n===0||n===1){

       return 1
    } else{

        return n*factorial(n-1)
    }
}
console.log(factorial(5))//120


/*
Write a function in js 
Fibonaci 
*/

function fibonacci(n){
    if(n===0||n===1){

        return n
    } else{

        return fibonacci(n-1)+fibonacci(n-2)
    }
}

console.log(fibonacci(8))

// Fibonacci series
let n = 8;        // define how many terms
let series = "";

for (let i = 0; i <= n; i++) {
  series += fibonacci(i) + " ";
}

console.log("Fibonacci Series:", series);