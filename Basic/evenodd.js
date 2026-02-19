

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