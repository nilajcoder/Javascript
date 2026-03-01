
/*

Write a Js Function
Sum of N Natural Numbers
*/


function sumofnaturalnumber(n){

    let sum=0;

    for(let i=1;i<=n;i++){

        sum=sum+i
    }
    return sum
}

console.log(sumofnaturalnumber(5))//15
console.log(sumofnaturalnumber(2))//3