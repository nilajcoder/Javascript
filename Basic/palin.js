

/*
Write a function Check Palindrome or not
*/


function checkpalin(n){

    let original=n
    let s=0;
    let r;
    while(n>0){
        r=n%10
        s=s*10+r;
        n=Math.floor(n/10)
    }
    if(original===s){
        return "Pallindrome "
    } else{
        return "Not Palindrome"
    }

}
console.log(checkpalin(121))//palin
console.log(checkpalin(123))//not