

/*
check Even odd WA Function

Range Checking
*/

function checkevenodd(n){

    if(n%2==0){

        console.log("The number is Even =",n)
    }else{
        console.log("The Number is Odd =",n)
    }
}


function rangeevenodd(n){

    for(let i=1;i<=n;i++){
        checkevenodd(i)
    }


}
checkevenodd(5)//odd
checkevenodd(6)//even
rangeevenodd(5)



/*
WAP in JS Function If i Input a Number Print Even Numbers
    and Sum them

    Input- 5  (2 4)
    output - 2 4   sum=6
*/

function evensum(n){

    let sum=0
    for(let i=1;i<=n;i++){

        if(i%2==0){
            console.log(i)
            sum=sum+i
        }
    }

   console.log("The sum of Even number =",sum)

}
evensum(5)