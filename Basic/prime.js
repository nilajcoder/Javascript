
/*
Wap function Prime number or not
*/


function checkprime(n){

    let count=0;
    for(let i=1;i<=n;i++){//1<=5

        if(n%i==0){//5%1==0 true 5%2==0 false 5%3==0 5%4==0  5%5==0 true

            count++ //1 2
        }

    }

    if(count==2){
        console.log("The number is prime =",n)//
    } else{
        console.log("The number is not prime =",n)
    }
}
checkprime(5)
checkprime(6)
checkprime(1)