


/*
Hoisting : is javascript default behaviour of moving declaration to the top.


var is hoisted and initialized with undefined,
 while let and const are hoisted
  but remain in the Temporal Dead Zone until initialized.
*/


/*

var is hoisted and initialized with undefined
*/
var b;
console.log(b)//undefined
 

console.log(c);//undefined
var c

console.log(a);//undefined
var a=10
console.log(a)//10


var cc=55;
console.log(cc)//55



/*
let and const are hoisted
  but remain in the Temporal Dead Zone until initialized.
*/
let bb
console.log(bb)//undefined


//console.log(db)//ref error
// let db


// const fs//ref eror
// console.log(fs)

// console.log(gh);
// const gh//ref error


// console.log(ff)
// const ff=10//ref error


const bbc=25;
console.log(bbc)


// Var Can be Redeclare and can be updated

var nn=10;
var nn=20;//update and redeclare
console.log(nn)//20

// Const can not be update can not redeclare block scope ES6 Latest Version in 2015

//let can not redclare but can be updated block scope  ES6 Latest Version in 2015

let hh=50;
hh=60;//updated not redclare
console.log(hh)//60

/*
TDZ is the phase where let and const variables exist but cannot be accessed until they are initialized.
*/