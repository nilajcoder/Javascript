
/*Arrow function is a shorter syntax for writing function expression
*/
const add=(a,b)=>{
    return a+b;
}
console.log("Addition is Arrow Function "+" "+add(2,3));

/*
Function declaration is a way to define function using function keyword

*/
/*

Pure Function is block of statement that performs specific task .
it alsways returns same output for same input
*/
function add1(c,d){
    return c+d;
}
console.log("Addition is Function Declaration Pure Function "+" "+add1(5,3));

/* Function expression is a way to define a function and assign to a variable
*/
const add2=function(x,y){
    return x+y;
}
console.log("Addition is  Function Expression"+" "+add2(2,2));


/*
Impure Function: An Impure Function that may return different output for the same 
input
*/

console.log("Impure Function")

let count=0;
function increment(){
    count++;
    return count;
}

console.log(increment())//1
console.log(increment())//2
console.log(increment())//3