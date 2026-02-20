/*

Reverse a number Write a Function
*/


function revnum(n) {

    let s=0
    let r
    while(n>0){
      
        r=n%10
        s=s*10+r
        n=Math.floor(n/10)

    }
    return s
}


function rangerevnum(n){

    for(let i=1;i<=n;i++){
          console.log("Reverse of", i, "=", revnum(i));
    }
}

console.log("Reverse Number is = ",revnum(541))
rangerevnum(20)