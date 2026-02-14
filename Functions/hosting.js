

/*
Hoisting : is javascript default behaviour of moving declaration to the top.
*/


/*

In Function declaration Entire function is hoisted (both name + body)

You can call the function before it is defined
*/

console.log(add(5,5))
function add(a,b){ 

    return a+b
}

console.log(add(5,2))


/*

Function Expression (Not Fully Hoisted)
Hoisting Behavior

Variable is hoisted

Function assignment is NOT hoisted

Behavior depends on var, let, or const
*/

//console.log(add2(5,5))//ref error
const add2=function(x,y){
    return x+y
}
console.log(add2(2,5))


//greet();//Type Error

var greet = function () {
  console.log("Hello");
};

greet()
