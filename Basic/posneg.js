

/*
WA Function that  Check the number positive or negative
*/


function checkposneg(n){

    if (n>0) {
        return "Possitive"
    } else if(n<0){
        return "Negative"
    } else{
        return "Zero"
    }
}


console.log(checkposneg(0))
console.log(checkposneg(5))
console.log(checkposneg(-9))



/*
Write a Function Multilplication Table of a number
*/

function multiplicationtable(n){

    for(let i=1;i<=10;i++){
        console.log("=",n*i)
    }
}

multiplicationtable(5)


/*
Swap two number without using third variable
*/

function swap(a,b){
 
    console.log("Before Swap =",a,b)
    a=a+b
    b=a-b
    a=a-b
    console.log("After Swap =",a,b)
}
swap(5,3)//3 5



/*
Divisibility Check
*/

function checkdiv(a,b){

    if(b!=0){
        console.log("This is divisiable")
    } else{
        console.log("This is not Divisiable")
    }

}
checkdiv(5,3)
checkdiv(5,0)

/*
Calculate Simple interest
*/

function simpleinterest(p,r,t){

    return p*r*t/100
}

console.log("Simple Interest is = ",simpleinterest(5,8,5))