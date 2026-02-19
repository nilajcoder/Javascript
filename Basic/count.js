

/*

Write a Function that return Count of a digit
*/

function countcheck(num){

    let count=0

    while(num>0){
        num=Math.floor(num/10)
        count++
    }

    return count
}

console.log("The number of digits =",countcheck(54))
console.log("The number of digits =",countcheck(543))
console.log("The number of digits =",countcheck(5452))