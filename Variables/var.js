

/*
What is Variable ?

Answer :- Variable is a memory location where we Store Data



Variable rules
1.Case sensitive
2.Letter digit underscore and $ allowed should be 1st Charecter
3.reseverd words can not be variables.


let var & const
-----------------
var: variable can be redeclared & updated. A global scope variable  before 2015 we used var


but in 2015 in javascript has new features called ES6 and we use the following keyword

let:variable can not be re-declared but can be updated. block scope variable.

const: variable can not be re-declared or updated.A block scope variable.

*/

//var

var age=25;
var age=45;
console.log(age)//45


//let
let n=76;
n=90;
n=86;
console.log(n);//86
//block scope
{
    let o=89;
    console.log(o);//89
}

{
    let o=54;
    console.log(o);//54

}


//const

const t=10;
console.log(t);//10