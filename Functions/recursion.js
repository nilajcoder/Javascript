/*

Recursion: is a Process in which a function calls it selt
*/


/*
WAP in Js Factorial of a number
*/

function Factorial(n){

    if(n==0||n==1){

        return 1;
    } else{
      return  n*Factorial(n-1)
    }
}

console.log(Factorial(5))


/*
Fibonaaci

0 1 1 2 3 5 8 13
*/

function fibo(f){
    if(f==0||f==1){

        return f;

    } else{
        return fibo(f-1)+fibo(f-2)
    }
}

console.log(fibo(6))

console.log(fibo(1))

console.log(fibo(2))

console.log(fibo(3))

// Fibonacci series
let n = 6;        // define how many terms
let series = "";

for (let i = 0; i <= n; i++) {
  series += fibo(i) + " ";
}

console.log("Fibonacci Series:", series);